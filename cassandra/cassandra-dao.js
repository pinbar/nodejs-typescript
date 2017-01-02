"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const bluebird = require("bluebird");
const cassandraDriver = require("cassandra-driver");
/**** My own promisified driver implementation. To use, uncomment lines[5,13] and comment out lines[1,2,12]. ****/
// import * as cassDriverProm from './cassandra-promisified';
class CassandraDao {
    constructor() {
        this.client = bluebird.promisifyAll(new cassandraDriver.Client({ contactPoints: ['127.0.0.1'], keyspace: 'tourney' }));
        // this.client = new cassDriverProm.CassandraClientPromisified({ contactPoints: ['127.0.0.1'], keyspace: 'tourney' });
    }
    authenticate(name, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT * FROM users WHERE name=? AND password=? ALLOW FILTERING';
            if (name && password) {
                try {
                    yield this.sleep(1000); //simulate a delay
                    console.log('execute query - begin');
                    const result = yield this.client.executeAsync(query, [name, password]);
                    console.log('execute query - end. Result: ' + result);
                    return this.processResults(result);
                }
                catch (err) {
                    console.log("error during authentication: " + err);
                    throw err;
                }
            }
        });
    }
    processResults(result) {
        if (result.rows.length > 0) {
            console.log('Found a valid name password combination!');
            return true;
        }
        else {
            console.log('Valid name password combination not found!');
            return false;
        }
    }
    shutdown() {
        this.client.shutdown();
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
exports.CassandraDao = CassandraDao;
