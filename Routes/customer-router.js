const express = require("express")
const customer = require("../Models/customer-model")
const router = express.Router()
const cors = require('cors');

let corsOptions = {
  origin: [ 'http://localhost:4000', ]
};


// create 

router.post('/create', (req, res) => {
  const newCustomer = new customer(req.body);
  newCustomer.save();
  res.status(201).json(newCustomer);
});



// customer login

router.post( '/login',cors(corsOptions), async(req,res) =>{
  const Customer = await customer.findOne(req.body);
  if(Customer){
    res.status(201).json(Customer);
  }else{
    res.status(500).json('customer login failed'); 
  }
});

// get all customers

router.get('/getallcustomers', async (req, res) => {
    try {
      const allCustomers = await customer.find(); 
      res.status(201).json(allCustomers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


module.exports = router;
