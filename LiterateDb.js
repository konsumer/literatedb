import anyDB from 'any-db'
import begin from 'any-db-transaction'
import sqldef from 'sqldef'
import { promises } from 'fs'

const { readFile } = promises

// the one in utils wasn't working
const promisify = (func) => {
  return (...args) => new Promise((resolve, reject) => {
    func(...args, (err, res) => {
      if (err) {
        return reject(err)
      }
      resolve(res)
    })
  })
}

export class LiterateDb {
  constructor (uri) {
    this.uri = uri
    this.connection = anyDB.createConnection(uri)
    this.query = promisify(this.connection.query)
    this.queryStream = this.connection.query
  }

  // the database type
  get type () {
    return this.uri.split(':')[0]
  }

  // the schema SQL DDL of the current database
  async get schema () {
    const type = this.type
  }

  // start a transaction, return a promisable & streamable object
  begin () {
    const tx = begin(this.connection)
    return {
      query: promisify(tx.query),
      queryStream: tx.query,
      rollback: tx.rollback,
      commit: tx.commit,
      on: tx.on
    }
  }

  // compare database with structure in sql file, and run diff in transaction
  async migrate (sqlFile) {
    const diff = sqldef(this.type === 'postgresql' ? 'postgres' : 'mysql', await this.schema, (await readFile(sqlFile)).toString())
    const tx = this.begin()
    tx.on('error', err => {
      tx.rollback()
      throw (err)
    })
    for (const sql of diff.split('\n')) {
      await tx.query(sql)
    }
    tx.commit()
  }
}

export default LiterateDb
