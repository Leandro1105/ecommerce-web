import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/products.js";
import { connectDatabase } from "./config/dbConnect.js";

const app = express();
dotenv.config({ path: "backend/config/config.env"});

connectDatabase();

app.use(express.json());

app.use("/api/v1", productRoutes);


app.listen(process.env.PORT, () => {
    console.log("Server running on port 3000");
})  