var cassController = require('./cassandra-controller');

beforeAll(function () {
    this.cass = new cassController.CassandraController();
})

describe("Cassandra tests", function () {

    it("should be a valid username password", function (done) {
        console.log('in test');
        this.cass.authenticate('jon', 'I know nothing')
            .then(function (response) {
                expect(response).toBe(true);
                done();
            });
    });

    it("should be an invalid username password", function (done) {
        console.log('in test');
        this.cass.authenticate('jon', 'I know everything')
            .then(function (response) {
                expect(response).toBe(false);
                done();
            });
    });
});