// this has tests that use a real postgres database

/* global describe, it */

const { LiterateDb } = require('../dist/build/literatedb.js')

let db

describe('literatedb: postgres', () => {
  it('should be able to make a new postgres database', () => {
    db = new LiterateDb('postgres://root:root@postgres/test')
  })

  it('should support migration', () => {})

  it('should support INSERTs', async () => {})

  it('should support UPDATEs', async () => {})

  it('should support SELECTs', async () => {})

  it('should support DELETEs', async () => {})

  it('should support transactions', async () => {})
})
