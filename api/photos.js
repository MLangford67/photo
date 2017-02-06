"use strict";
var express = require("express");
var mongodb = require("mongodb");
var db_1 = require("../db");
var router = express.Router();
router.post('/', function (req, res) {
    var photo = req.body;
    photo._id = new mongodb.ObjectID(req.body._id);
    db_1.default.db.collection('photo').save(req.body).then(function (newPhoto) {
        res.json(newPhoto);
    });
});
router.get('/', function (req, res) {
    db_1.default.db.collection('photo').find().toArray().then(function (photo) {
        res.json(photo);
    });
});
router.delete('/:id', function (req, res) {
    var photoId = new mongodb.ObjectID(req.params['id']);
    db_1.default.db.collection('photo').remove({ _id: photoId }).then(function () {
        res.sendStatus(200);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
