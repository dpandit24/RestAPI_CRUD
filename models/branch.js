const mongoose = require('mongoose');
const branchSchema = mongoose.Schema({
    name: String,
    city: String
});

module.exports = mongoose.model('Branch', branchSchema);