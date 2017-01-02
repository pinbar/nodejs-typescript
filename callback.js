"use strict";
const request = require("request");
const options = {
    url: 'http://www.google.com',
    resolveWithFullResponse: true
};
let status = "loading";
function get() {
    request.get(options, function (error, response) {
        if (error) {
            status = error;
        }
        else {
            status = response.statusCode;
        }
        console.log("status after callback: " + status);
    });
}
get();
console.log(status);
