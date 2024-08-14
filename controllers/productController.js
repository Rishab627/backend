import { Product } from "../models/Product.js"





export const getProducts = async (req, res) => {

    try {
        const products = await Product.find({});
        return res.status(200).json({
            products,
    });
        
    } catch (err) {
        return res.status(200).json({error: `${err}`});
        ;
        
    }

}



export const addProducts = async (req, res) => {
console.log(req.body);
console.log(req.files.image);
    try {
        const products = await Product.find({});
        return res.status(200).json({});
        
    } catch (err) {
        return res.status(200).json({error: `${err}`});
        ;
        
    }

}