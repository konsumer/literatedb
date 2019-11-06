# literatedb

A simple database library for people who are comfortable with SQL, and don't want too much crap in the way, but want it easy & simple. Supports transactions and promises and migration.

# TODO: still in progress. check back soon

## install

```
npm i literatedb
```

## usage

This library is a wrapper around [any-db](https://www.npmjs.com/package/any-db) and [sqldef](https://www.npmjs.com/package/sqldef). You can find a bit more info on each of their pages.

```js
import LiterateDb from 'literatedb'

// setup a database
const db = new LiterateDb('postgresql://user:secret@localhost')

// you can also use literatedb field in package.json, or a .literatedbrc file with all your settings, and leave off uri or pool options
const db = new LiterateDb()

// you can also use a pool
const db = new LiterateDb('postgresql://user:secret@localhost', { min: 2, max: 20 })

// ...later
db.close()

const run = async () => {
  // migrate the database from a simple SQL file that describes your database
  await db.migrate(`${__dirname}/schema.sql`)

  // run a query
  const rows = await db.query('SELECT * FROM users WHERE email=?', ['konsumer@jetboystudio.com'])

  // use transactions
  const tx = db.begin()
  tx.on('error', () => tx.rollback())
  await tx.query('INSERT INTO users (email, firstname, lastname) VALUES (?, ?, ?)', ['konsumer@jetboystudio.com', 'David', 'Konsumer'])
  await tx.query('INSERT INTO users (email, firstname, lastname) VALUES (?, ?, ?)', ['test@test.com', 'Test', 'User'])
  tx.commit()
}
run()


```

## TODO

This isn't at all complete. I still need to do this stuff:

* [ ] Make sure sqldef migrations work right. It seems like `postinstall` isn't firing
* [ ] pool support
* [ ] cosmiconfig support
* [ ] write actual migration code
* [ ] sqldef support for all any-db database types (add sqlite & mssql)
* [ ] unit-tests that use sqlite in `::memory::`
* [ ] optional integration-tests that test every database type
* [ ] fix `npm audit` issue with braces
* [ ] write a blog post
