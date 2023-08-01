import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
// import commentRoutes from "./routes/commentRoutes.js";
import dbConnect from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import paymentRoutes from "./routes/paymentRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";
dotenv.config();
const app = express();

dbConnect();

// ...

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://social-app-mernvercel-client.vercel.app"
        : "http://localhost:3000",
    credentials: true,
    preflightContinue: true,
  })
);



app.use(cookieParser());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/payments", paymentRoutes);
app.use("/orders", orderRoutes);
app.use("/newsletters", newsletterRoutes);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log("Server is up and running at port: ", port));
