import express from "express";
import { addProducts, getProducts } from "../controllers/productController.js";
import { notAllowed } from "../utils/shareFunc.js";
import { validFile } from "../middlewares/fileValid.js";
import { adminCheck, checkUser } from "../middlewares/userCheck.js";



const router = express.Router();


router.route('/').get((req, res) => getProducts(req, res)).post(checkUser, adminCheck, validFile, addProducts).all(notAllowed);

// router.route('/:id').get(getProducts).post(validFile, addProducts).all(notAllowed);



export default router;