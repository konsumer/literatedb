// this has tests that use a real sqlite database
// This is the only unit-test that doesn't require a real database

/* global describe, it, expect */

const { LiterateDb } = require('../dist/build/literatedb.js')

let db

describe('sqlite', () => {
  it('should be able to make a new sqlite database', () => {
    db = new LiterateDb('sqlite://:memory:')
  })

  it('should support migration', async () => {
    await db.migrate(`${__dirname}/schema.sql`)
    expect(await db.schema).toMatchSnapshot()
  })

  it('should support INSERTs', async () => {})

  it('should support UPDATEs', async () => {})

  it('should support SELECTs', async () => {})

  it('should support DELETEs', async () => {})

  it('should support transactions', async () => {})
})
