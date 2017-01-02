import * as request from 'request-promise';

const options = {
    url: 'http://www.google.com',
    resolveWithFullResponse: true
}

let status = "loading";

async function get() {
    console.log("making request");
    try {
        const response = await request.get(options);
        status = response.statusCode;
    } catch(err) {
        status = err;
        throw err;
    }    
    console.log("response back: " + status);
    return status;
}

get()
    .then(function(response){
        console.log("end operation with response: " + response);
    })
    .catch(function(error){
        console.log("end operation with error: " + error);
    }); 
