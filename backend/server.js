import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import expenseRoutes from "./Routes/expenseRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection URI
mongoose.connect("mongodb+srv://iamankitadas2021:Tupur020805@cluster0.kauwi0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/expenses", expenseRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));