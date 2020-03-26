const {Schema, model} = require("mongoose")

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        require: true
    },
    hashTag: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: true
    }
})

module.exports = model("Article", schema)