const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
   
        username:{
            type:String,
            require:true
        },
        email:{
            type: String,
            require: true
        },
        city:{
            type: String,
            require: true
        },    

},
    { timestamps: true }
)

module.exports = mongoose.model("customer",customerSchema)