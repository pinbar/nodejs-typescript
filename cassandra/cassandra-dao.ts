import * as bluebird from 'bluebird';
import * as cassandraDriver from 'cassandra-driver';

/**** My own promisified driver implementation. To use, uncomment lines[5,13] and comment out lines[1,2,12]. ****/
// import * as cassDriverProm from './cassandra-promisified';

export class CassandraDao {

    private client: any;

    constructor() {
        this.client = bluebird.promisifyAll(new cassandraDriver.Client({ contactPoints: ['127.0.0.1'], keyspace: 'tourney' }));
        // this.client = new cassDriverProm.CassandraClientPromisified({ contactPoints: ['127.0.0.1'], keyspace: 'tourney' });
    }

    async authenticate(name, password) {
        const query = 'SELECT * FROM users WHERE name=? AND password=? ALLOW FILTERING';
        if (name && password) {
            try {
                await this.sleep(1000); //simulate a delay
                console.log('execute query - begin');
                const result = await this.client.executeAsync(query, [name, password]);
                console.log('execute query - end. Result: ' + result);
                return this.processResults(result);
            } catch (err) {
                console.log("error during authentication: " + err);
                throw err;
            }
        }
    }

    private processResults(result) {
        if (result.rows.length > 0) {
            console.log('Found a valid name password combination!');
            return true;
        } else {
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