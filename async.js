"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const request = require("request-promise");
const options = {
    url: 'http://www.google.com',
    resolveWithFullResponse: true
};
let status = "loading";
function get() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("making request");
        try {
            const response = yield request.get(options);
            status = response.statusCode;
        }
        catch (err) {
            status = err;
            throw err;
        }
        console.log("response back: " + status);
        return status;
    });
}
get()
    .then(function (response) {
    console.log("end operation with response: " + response);
})
    .catch(function (error) {
    console.log("end operation with error: " + error);
});
