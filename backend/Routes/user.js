import express from 'express'
import { login, profile, register, users } from '../Controllers/user.js';
import { Authenticated } from "../Middlewares/auth.js";
const router = express.Router();

// register user
router.post('/register',register) //=> /api/user/register

// login user
router.post('/login',login)

// get all user's
router.get('/all',users)

// get user profile
router.get("/profile", Authenticated, profile);

export default router