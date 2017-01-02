## My experiments with using TypeScript for NodeJS
In addition to providing a better structure, typesafety and optionally object oriented design, TypeScript allows the use of newer programatic models with NodeJS.

This project shows some very basic examples of callbacks, promises and async/await. It also shows how to use the async/await functionality with a node library that only supports callbacks (e.g. cassandra-driver).

### tech stack
* **nodejs** - javascript runtime built on v8 engine
* **request** - module for testing end-points
* **request-promise** - promisified version of request
* **bluebird** - module for promisifying existing callback/nodeback libraries
* **jasmine** - testing framework
* **cassandra-driver** - library for connecting to the cassandra database (natively supports only callbacks)

### prerequisites
* Node and NPM (verify with `node -v` and `npm -v`)
* Apache Cassandra (optional: to see how to use async/await with a callback only library)
    * cassandra depends on java8 (verify with `java --version`)

### getting started
* clone repo and `npm install`
* *optional:*
    * set up database (see /cassandra/testData.cql) and start cassandra

### trying out
* check out the `scripts` in `package.json` to see what can be run
* like many nodejs libraries, `cassandra-driver` only provides callback APIs. To use async/await with it, we need to promisify its APIs.
    * This can be done by using a library like `bluebird`
    * Alternatively, you could implement your own version of a promisifier (see an example in `cassandra/cassandra-promisified.ts`)

### running tests
* there is only one integration test in the project and it uses cassandra, the DB needs to be up for this to work
* run `npm run test-cass` in the project directory


