import Mongoose from "mongoose";
const productSchema = new Mongoose.Schema({
    id: {
        type:String,
        required:true,
        unique:true
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    tagline:String
});

const Product = Mongoose.model('product',productSchema)

export default Product;