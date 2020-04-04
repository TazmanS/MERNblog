const {Schema, model} = require('mongoose')

const schema = new Schema({
    article: {
        type: Array,
        required: false
    }
})

module.exports = model("Author", schema)