// this has tests that use a real mssql database

/* global describe, it */

const { LiterateDb } = require('../dist/build/literatedb.js')

let db

describe('mssql', () => {
  it('should be able to make a new mssql database', async () => {
    db = new LiterateDb('mssql://sa:N0tArealDatabase@mssql')
    // TODO: create test database?
    // await db.query('CREATE DATABASE test')
    // await db.query('USE test')
  })

  it('should support migration', () => {})

  it('should support INSERTs', async () => {})

  it('should support UPDATEs', async () => {})

  it('should support SELECTs', async () => {})

  it('should support DELETEs', async () => {})

  it('should support transactions', async () => {})
})
