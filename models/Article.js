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
        type: Array,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        require: true
    }
})

module.exports = model("Article", schema)