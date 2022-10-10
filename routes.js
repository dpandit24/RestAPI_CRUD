const express = require('express');
const router = express.Router();

const Branch = require('./models/branch');
const Loan = require('./models/loan');
const req = require('express/lib/request');

router.get('/branch/:id', async (request, response) => {  // fetch by id
    const _id = request.params.id;
    const data = await Branch.findById(_id);
    response.send(data);
});

router.get('/branch', async (request, response) => {  // fetch by id
    const data = await Branch.find();
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

module.exports = router;
