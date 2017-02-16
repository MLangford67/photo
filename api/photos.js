"use strict";
var express = require("express");
var photoSchema_1 = require("../models/photoSchema");
var router = express.Router();
router.post('/', function (req, res) {
    var photo = new photoSchema_1.default();
    photo.title = req.body.url.title;
    photo.description = req.body.url.description;
    photo.url = req.body.url.url;
    photo.save(function (err, newPhoto) {
        if (err) {
            console.log(err);
        }
        else {
            res.end();
        }
    });
});
router.get('/', function (req, res) {
    photoSchema_1.default.find({}, function (err, photos) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(photos);
        }
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
