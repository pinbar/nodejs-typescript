"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const cassDao = require("./cassandra-dao");
class CassandraController {
    constructor() {
        this.cassandraDao = new cassDao.CassandraDao();
    }
    authenticate(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("checking");
            try {
                const response = yield this.cassandraDao.authenticate(username, password);
                console.log("back from authenticate with response: " + response);
                return response;
            }
            catch (err) {
                console.log("error in auth: " + err);
                throw err;
            }
        });
    }
    shutdown() {
        this.cassandraDao.shutdown();
    }
}
exports.CassandraController = CassandraController;
