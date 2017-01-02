"use strict";
const cassController = require("./cassandra-controller");
const cass = new cassController.CassandraController();
cass.authenticate("jon", "I know nothing")
    .then(function (response) {
    console.log("end operation with response: " + response);
    cass.shutdown(); //without this, the node process holds the client connection open and hangs
})
    .catch(function (error) {
    console.log("end operation with error: " + error);
    cass.shutdown(); //without this, the node process holds the client connection open and hangs
});
