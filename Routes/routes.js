const express = require('express');
const users = require('../users/users');
const router = express.Router();

router.get('/',(req,res) => {
    res.status(200).json({
        data:users,
        success:true
    })
})
router.get('/:id',(req,res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if(!user) return res.status(404).json({
        data:null,
        success:false
    })
    res.status(200).json({
        data:user,
        success:true
    })
})

router.post('/',(req,res) => {
    req.body.id = parseInt(req.body.id);
    users.push(req.body);
    res.json({
        data:'user added successfully'
    })
})

module.exports = router ; 