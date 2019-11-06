// this has tests that use a real mssql database

/* global describe, it */

const { LiterateDb } = require('../dist/build/literatedb.js')

let db

describe('literatedb: mssql', () => {
  it('should be able to make a new mssql database', () => {
    db = new LiterateDb('mssql://root:root@mssql/test')
  })

  it('should support migration', () => {})

  it('should support INSERTs', async () => {})

  it('should support UPDATEs', async () => {})

  it('should support SELECTs', async () => {})

  it('should support DELETEs', async () => {})

  it('should support transactions', async () => {})
})
