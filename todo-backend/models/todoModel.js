const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model("TodoSchema", todoSchema);