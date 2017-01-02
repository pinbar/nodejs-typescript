import * as cassDao from './cassandra-dao';

export class CassandraController {

    private cassandraDao;

    constructor() {
        this.cassandraDao = new cassDao.CassandraDao();
    }

    async authenticate(username: string, password: string) {
        console.log("checking");
        try {
            const response = await this.cassandraDao.authenticate(username, password);
            console.log("back from authenticate with response: " + response);
            return response;
        } catch (err) {
            console.log("error in auth: " + err);
            throw err;
        }
    }

    shutdown() {
        this.cassandraDao.shutdown();
    }
}