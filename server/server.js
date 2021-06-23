// const path = require('path');
// require('dotenv').config({ path: 'MONGODB_URL' });
// require('dotenv').config({ path: path.resolve(__dirname, 'server/.env') });

require('dotenv').config()
// const dotenv = require("dotenv");
// dotenv.config();



const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const productRouter = require('./routes/productRouter')

const app =  express();
app.use(express.json());
app.use(cors());

app.use("/api/products", productRouter)

const port = process.env.PORT || 5000
const URI = process.env.MONGODB_URL

mongoose.connect(URI, {
    useUnifiedTopology:true,
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
}, err => {
    if(err) throw err
    console.log("MongoDB is connected")
});

app.listen(port, () => {
    console.log("Server is running on port", port)
})
