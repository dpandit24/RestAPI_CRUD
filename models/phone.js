const mongoose = require('mongoose');
const phoneSchema = mongoose.Schema({
    name: String,
    modelNumber: String,
});

module.exports = mongoose.model('Phone', phoneSchema);
