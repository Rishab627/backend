import express from "express";
import { addProducts, getProducts, removeProduct, updateProducts } from "../controllers/productController.js";
import { notAllowed } from "../utils/shareFunc.js";
import { updateFile, validFile } from "../middlewares/fileValid.js";
import { adminCheck, checkUser } from "../middlewares/userCheck.js";



const router = express.Router();


router.route('/').get((req, res) => getProducts(req, res)).post(checkUser, adminCheck, validFile, addProducts).all(notAllowed);

router.route('/:id').patch(checkUser, adminCheck, updateFile, updateProducts).delete(checkUser, adminCheck, updateFile, removeProduct).all(notAllowed);



export default router;