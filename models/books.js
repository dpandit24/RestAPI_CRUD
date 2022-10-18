const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    name: String,
    auther: String,
    price: Number
});

module.exports = mongoose.model('book', bookSchema);
