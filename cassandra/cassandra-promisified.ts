import * as cassandraDriver from 'cassandra-driver';

export class CassandraClientPromisified {

    private client: any;

    constructor(clientOptions) {
        this.client = new cassandraDriver.Client(clientOptions);
    }

    shutdown() {
        this.client.shutdown();
    }

    executeAsync(query: string, params) {
        let that = this;
        return new Promise<any>(function (resolve, reject) {
            that.client.execute(query, params, function (error, result) {
                if (error) {
                    return reject(error);
                } else {
                    return resolve(result);
                }
            });
        });
    }
}