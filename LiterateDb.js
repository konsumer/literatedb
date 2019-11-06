import anyDB from 'any-db'
import begin from 'any-db-transaction'
import { promisify } from 'util'
import sqldef from 'sqldef'

class LiterateDb {
  constructor (uri) {
    this.uri = uri
    this.connection = anyDB.createConnection(uri)
    this.query = promisify(this.connection.query)
    this.queryStream = this.connection.query
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

  // compare database with structure in sql file
  migrate (sqlFile) {
    // TODO: parse this.uri & run sqldef
  }
}

export default LiterateDb
