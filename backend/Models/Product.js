import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  category: { type: String, require: true },
  qty: { type: Number, require: true },
  imgSrc: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
});

export const Products = mongoose.model("Products",productSchema)