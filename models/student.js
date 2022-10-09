const mongoose = require('mongoose');
const studentSchema = mongoose.Schema({
    name: String,
    enrollmentNumber: String,
    phoneNumber: String
});

module.exports = mongoose.model('Student', studentSchema);
