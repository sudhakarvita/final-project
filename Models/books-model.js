const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
   
        bookname:{
            type:String,
            require:true
        },
        price:{
            type: String,
            require: true
        },
        quantity:{
            type: String,
            require: true
        }, 
        author:{
            type: String,
            require: true
        },  

},
    { timestamps: true }
)

module.exports = mongoose.model("book",bookSchema)