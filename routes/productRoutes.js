import express from "express";
import { addProducts, getProducts } from "../controllers/productController.js";
import { notAllowed } from "../utils/shareFunc.js";



const router = express.Router();


router.route('/').get((req, res) => getProducts(req, res)).post(addProducts).all(notAllowed);


export default router;