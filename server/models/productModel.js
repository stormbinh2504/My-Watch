const mongoose = require('mongoose')
const productSchema = new mongoose.Schema(
    {
        product_id:{
            type: String,
            unique:true,
        },
        // title: String,
        title: {
            type: String,
            required: true,
            trim: true
        },
        images:{
            type: Array,
            default: "https://www.dangquangwatch.vn/upload/product/712042116_donghonhapkhau105.jpg",
        },
        description:String,
        content: String,
        colors: Array,
        sizes: Array,
        price: {
            type: Number,
            required: true,
        }

    }
)

module.exports = mongoose.model("Products", productSchema)