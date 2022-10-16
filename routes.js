const express = require('express');
const router = express.Router();

const Branch = require('./models/branch');
const Loan = require('./models/loan');
const Student = require('./models/student');
const req = require('express/lib/request');
const Book = require('./models/books');
const Phone = require('./models/phone');

router.get('/branch/:id', async (request, response) => {  // fetch by id
    const _id = request.params.id;
    const data = await Branch.findById(_id);
    response.send(data);
});

router.get('/branch', async (request, response) => {  // fetch by id
    const data = await Branch.find();
    response.send(data);
});

router.get('/student', async (request, response) => {  // fetch by id
    const data = await Student.find();
    response.send(data);
});

router.get('/books', async (request, response) => {  // fetch by id
    const data = await Book.find();
    response.send(data);
});

router.post('/branch', async (request, response) => {    // insert
    const branch = new Branch(request.body)
    await branch.save();
    response.send(branch);
})

router.post('/student', async (request, response) => {    // insert
    const student = new Student(request.body)
    await student.save();
    response.send(branch);
})

router.patch('/branch/:id', async (request, response) => {    // update
    const _id = request.params.id;
    const branch = await Branch.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(branch);
})

router.delete('/branch/:id', async (request, response) => {   // delete by id
    try{
        const _id = request.params.id;
        const branch = await Branch.findByIdAndDelete(_id);
        response.send(branch);
    }catch (e){
        response.send(e);
    }
})
router.get('/student/:id', async (request, response) => {  // fetch by id
    const _id = request.params.id;
    const data = await Student.findById(_id);
    response.send(data);
});

router.get('/phone', async (request, response) => {  // fetch by id
    const data = await Phone.find();
    response.send(data);
});


module.exports = router;
