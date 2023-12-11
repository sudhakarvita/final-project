const express = require("express")
const admin = require("../Models/admin-model")
const router = express.Router()
const cors = require('cors');

let corsOptions = {
  origin: [ 'http://localhost:4000', ]
};


// create admin

router.post('/create', (req, res) => {
  const newAdmin = new admin(req.body);
  newAdmin.save();
  res.status(201).json(newAdmin);
});



// admin login

router.post( '/login',cors(corsOptions), async(req,res) =>{
  const Admin = await admin.findOne(req.body);
  if(Admin){
    res.status(201).json(Admin);
  }else{
    res.status(500).json('Admin login failed'); 
  }
});


module.exports = router;
