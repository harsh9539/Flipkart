import { products } from "./Constants/data.js"
import Product from "./Model/product-schema.js";
const DefaultData = () => {
    try{
        // await Product.deleteMany({});
        // await Product.insertMany(products);
        Product.insertMany(products);
        console.log("data imported success")
    }catch(error){
        console.log(error.message);
    }
}
export default DefaultData;