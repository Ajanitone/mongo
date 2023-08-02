import express from "express";
const router = express.Router();

import auth from "../middleware/auth.js";

import multerMiddleware from "../config/multer-cloudinary.js";

import {
  addProduct,
  listProduct,
  deleteProduct,
  findone,
  editProduct,
  searchProduct1,
} from "../controllers/productController.js"; //Call the productController

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./server/media");
//   },
//   filename: function (req, file, cb) {
//     console.log("🚀 ~ INSIDE DESTINATION: file:", file);

//     let extension = "";

//     if (file.mimetype.includes("image")) extension = file.mimetype.slice(6); // gets the characters after index 5

//     const newFile = file.fieldname + "-" + Date.now() + "." + extension;
//     console.log("🚀 ~  INSIDE DESTINATION: file READY", newFile);
//     cb(null, newFile);
//   },
// });

// const uploadMulterAdvanced = multer({ storage: storage });

router.post("/addProduct", auth, multerMiddleware.single("image"), addProduct);
router.get("/listProduct", listProduct);

router.delete("/deleteProduct/:_id", deleteProduct);

router.post("/edit", multerMiddleware.single("image"), editProduct);
router.get("/findone", findone);

router.get("/searchProduct/:name", searchProduct1);

export default router;
