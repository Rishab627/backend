import { Product } from "../models/Product.js"
import fs from 'fs';
import mongoose from "mongoose";



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
    const { title, brand, category, description, price, stock} = req.body;

    try {
        await Product.create({
            title,
            brand,
            category,
            description,
            image: req.imagePath,
            price: Number(price),
            stock: Number(stock),
        });
        
        return res.status(200).json({message: 'product added successfully'});
        
    } catch (err) {
        fs.unlink(`.${req.imagePath}`, (err) => {
            console.log(err); 
        })
        return res.status(400).json({error: `${err}`});
        ;
        
    }

}




export const updateProducts = async (req, res) => {
    const {id} = req.params;

    try {

        if(mongoose.isValidObjectId(id)){
            const isExist = await Product.findById(id);
            if (isExist) {
                const updateObj = {
                    title: req.body.title || isExist.title, 
                    brand: req.body.brand || isExist.brand, 
                    category: req.body.category || isExist.category, 
                    description: req.body.description || isExist.description,
                    price: Number(req.body.price) || isExist.price, 
                    stock: Number(req.body.stock) || isExist.stock,
        };
                if (req.imagePath) {
                    await isExist.updateOne({
                        ...updateObj,
                        image:req.imagePath
                    });
                    fs.unlink( `.${isExist.image}`, (err) => {

                    });
                } else {
                    await isExist.updateOne(updateObj);
                }



                return res.status(200).json({message: 'successfully updated'});
                
            }
        }
        
       


        return res.status(400).json({message: 'please provide valid id'});

        
    } catch (err) {
       if (req.imagePath) fs.unlink(`.${req.imagePath}`, (err) => {
            
        });
        return res.status(400).json({error: `${err}`});
        ;
        
    }

}



export const removeProduct = async (req, res) => {

    const {id} = req.params;

    try {
        if(mongoose.isValidObjectId(id)){
            const isExist = await Product.findById(id);
            if (isExist) {
                await isExist.deleteOne();
                fs.unlink( `.${isExist.image}`, (err) => {

                });
                return res.status(200).json({message: 'successfully deleted'});
                
            }
        }
        
       


        return res.status(400).json({message: 'please provide valid id'});
        
    } catch (err) {
        // fs.unlink(`.${req.imagePath}`, (err) => {
        //     // console.log(err); 
        // })
        return res.status(400).json({error: `${err}`});
        ;
        
    }

}