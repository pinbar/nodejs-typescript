"use strict";
const cassandraDriver = require("cassandra-driver");
class CassandraClientPromisified {
    constructor(clientOptions) {
        this.client = new cassandraDriver.Client(clientOptions);
    }
    shutdown() {
        this.client.shutdown();
    }
    executeAsync(query, params) {
        let that = this;
        return new Promise(function (resolve, reject) {
            that.client.execute(query, params, function (error, result) {
                if (error) {
                    return reject(error);
                }
                else {
                    return resolve(result);
                }
            });
        });
    }
}
exports.CassandraClientPromisified = CassandraClientPromisified;
