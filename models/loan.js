const mongoose = require('mongoose');
const loanSchema = mongoose.Schema({
    loan_number: String,
    amount: String
});

module.exports = mongoose.model('Loan', loanSchema);