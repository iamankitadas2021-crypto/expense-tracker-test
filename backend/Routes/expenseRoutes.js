import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

// ➤ Get all expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ➤ Add new expense
router.post("/", async (req, res) => {
  const { title, amount, date } = req.body;
  try {
    const newExpense = new Expense({ title, amount, date });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ➤ Delete expense
router.delete("/:id", async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;