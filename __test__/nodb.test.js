// this will have unit-tests that don't require an actual database
/* global describe, it */

const { LiterateDb } = require('../dist/build/literatedb.js')

let db

describe('literatedb', () => {
  it('should be able to make a new sqlite memory database', () => {
    db = new LiterateDb('sqlite://:memory:')
  })
})
