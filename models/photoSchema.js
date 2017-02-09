"use strict";
var mongoose = require("mongoose");
var photoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 2,
    },
    discription: {
        type: String,
        require: true
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('Photo', photoSchema);
