import * as request from 'request-promise';

const options = {
    url: 'http://www.google.com',
    resolveWithFullResponse: true
}

let status = "loading";

function get() {
    request.get(options)
    .then(function(response){
        console.log("success: promise resolved. StatusCode: " + response.statusCode);
    })
    .catch(error => console.log("error: " + error));
}

get();
console.log(status);