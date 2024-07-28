import express from 'express'
import {
  addToCart,
  clearCart,
  removeProductFromCart,
  userCart,
  decreaseProudctQty,
} from "../Controllers/cart.js";

import { Authenticated } from '../Middlewares/auth.js';

const router = express.Router();

// add To cart
router.post('/add',Authenticated,addToCart)

// get User Cart
router.get("/user", Authenticated, userCart);

// remove product from cart
router.delete("/remove/:productId", Authenticated, removeProductFromCart);

// clear cart
router.delete("/clear", Authenticated, clearCart);

// decrease items qty
router.post("/--qty", Authenticated, decreaseProudctQty);


export default router;