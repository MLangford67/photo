"use strict";
var mongoose = require("mongoose");
var photoSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Photo', photoSchema);
