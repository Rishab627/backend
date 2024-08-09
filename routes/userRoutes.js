import { getAllUsers, loginUser, registerUser } from "../controllers/userController.js";
import express from "express";
import { notAllowed } from "../utils/shareFunc.js";
import Joi from 'joi';
import expressJoi from 'express-joi-validation';

const validator = expressJoi.createValidator({

});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/).required().messages({
    'string.pattern.base': `provide strong password that have number special character`,
  })
});

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/).required().messages({
    'string.pattern.base': `provide strong password that have number special character`,
  }),
  fullname: Joi.string().required()
});

const router = express.Router();


router.route('/').get(getAllUsers);
router.route('/login').post(validator.body(loginSchema), loginUser).all(notAllowed);
router.route('/register').post(validator.body(registerSchema), registerUser).all(notAllowed);


export default router;