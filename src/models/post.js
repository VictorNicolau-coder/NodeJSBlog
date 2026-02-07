const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String},
    created_at: {type: Date, default: Date.now},
    update_at: {type: Date, default: Date.now},
    imageUrl: {type: String, required: true}
})

module.exports = mongoose.model('Post', PostSchema);