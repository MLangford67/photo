"use strict";
var express = require("express");
var db_1 = require("../db");
var mongodb = require("mongodb");
var router = express.Router();
router.post('/', function (req, res) {
    console.log(req.body);
    var photo = req.body;
    photo.title = req.body.title;
    photo.description = req.body.description;
    photo.url = req.body.url;
    photo._id = new mongodb.ObjectID(req.body._id);
    db_1.default.db.collection('photos').save(req.body).then(function (newPhoto) {
        res.json(newPhoto);
    }).catch(function (err) {
        console.log(err);
        res.send(err);
    });
});
router.get('/', function (req, res) {
    db_1.default.db.collection('photos').find().toArray().then(function (photos) {
        res.json(photos);
    });
});
router.delete('/:id', function (req, res) {
    var photoId = new mongodb.ObjectID(req.params['id']);
    db_1.default.db.collection('photos').remove({ _id: photoId }).then(function () {
        res.sendStatus(200);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
