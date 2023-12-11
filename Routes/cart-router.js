const express = require("express")
const cart = require("../Models/cart-model")
const router = express.Router()
const cors = require('cors');

let corsOptions = {
  origin: [ 'http://localhost:4000', ]
};


// create cart

router.post('/create', (req, res) => {
  const newCart = new cart(req.body);
  newCart.save();
  res.status(201).json(newCart);
});

//get cartby customerId


router.get('/getById/:customerId', cors(corsOptions), async (req, res) => {
    try {
      const Cart = await cart.find({ customerId: req.params.customerId });
  
      if (!Cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
      res.status(200).json(Cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

//get cartDeleteby customer Id 

router.delete( '/deleteById/:id', async (req,res) =>{
    const Cart = await cart.findByIdAndDelete(req.params.id)
    res.status(201).json(Cart)
  })

module.exports = router;
