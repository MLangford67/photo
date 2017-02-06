"use strict";
var connectionString = 'mongodb://Mlangford67:Carnifex6@ds159208.mlab.com:59208/piranhaspiderdb';
var mongodb = require("mongodb");
var Database = (function () {
    function Database() {
    }
    Database.connect = function () {
        var _this = this;
        return mongodb.MongoClient.connect(connectionString).then(function (db) {
            _this.db = db;
        }).catch(function (err) {
            console.error(err);
        });
    };
    return Database;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Database;
