import express from "express";
import { getAllUsers, loginUser } from "../controllers/userController.js";



const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/login').post(loginUser);


export default router;