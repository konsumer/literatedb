// this has tests that use a real mysql database

/* global describe, it */

const { LiterateDb } = require('../dist/build/literatedb.js')

let db

describe('mysql', () => {
  it('should be able to make a new mysql database', () => {
    db = new LiterateDb('mysql://root:root@mysql/test')
  })

  it('should support migration', () => {})

  it('should support INSERTs', async () => {})

  it('should support UPDATEs', async () => {})

  it('should support SELECTs', async () => {})

  it('should support DELETEs', async () => {})

  it('should support transactions', async () => {})
})
