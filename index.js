import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import nodemailer from "nodemailer";
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.post("/api/products", async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(404)
      .json({ success: false, message: "Fill all the feilds" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    return res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "server error" });
  }
});
app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const products = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, products, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Product not found" });
  }
});
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Product not found" });
  }
});
const transporter = nodemailer.createTransport({
  // secure: true,
  // host: "smtp.gmail.com",
  // port: 465,
  service: "gmail",
  auth: {
    user: "harikarthick2506@gmail.com",
    pass: "rcnllsmpemiuurqh"
    //  pass: "knfkpvlvmephnuwr"
  },
});
app.post("/api/send-mail", async (req, res) => {
  const mailContent = req.body;
  try {
    if(!mailContent.to || !mailContent.subject || !mailContent.content){
      res.status(400).json({ success: false, message: `${error},mail not sent` });
    }
    await transporter.sendMail({
      to: mailContent.to,
      subject: mailContent.subject,
      html: mailContent.content,
    });
    res.status(200).json({ success: true, message: "Mail sent" });
  } catch (error) {
    res.status(500).json({ success: false, message: `${error},mail not sent` });
  }
});
app.listen(5000, async () => {
  // connectDB();
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log("Server is running on port 5000");
});
