const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const cors = require('cors')
const app = express()
dotenv.config()

mongoose.connect(process.env.DB_URL)
    .then(console.log("db connected succesfully"))
    .catch(err => {
        console.log("error",err)
    })

 const adminRouter = require("./Routes/admin-router")
 const booksRouter = require("./Routes/books-router")
 const customerRouter = require("./Routes/customer-router")
 const cartRouter = require("./Routes/cart-router")

app.use(express.json())

app.use(cors()) 

let corsOptions = {
    origin: [ 'http://localhost:4000', ]
};

 app.use("/admin",cors(corsOptions), adminRouter )
 app.use("/books",cors(corsOptions), booksRouter )
 app.use("/customer",cors(corsOptions), customerRouter)
 app.use("/cart",cors(corsOptions), cartRouter)


//port
app.listen(4000, (req, res) => {
    console.log("welcome final-project backend port on 4000")
})