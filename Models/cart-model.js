const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
   
        bookID:{
            type:Object,
            require:true
        },
        customerId:{
            type:Object,
            require: true
        },
        date:{
            type:String,
            require: true
        },   

},
    { timestamps: true }
)

module.exports = mongoose.model("cart",cartSchema)