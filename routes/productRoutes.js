import express from "express";
import { getProducts } from "../controllers/productController.js";
import { notAllowed } from "../utils/shareFunc.js";



const router = express.Router();


router.route('/').get((req, res) => getProducts(req, res)).all(notAllowed);


export default router;