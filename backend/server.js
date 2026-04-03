const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// const port = 6000;

mongoose.connect("mongodb+srv://shalinipaps_db_user:shalini123@cluster0.qyiafjm.mongodb.net/connection")
  .then(() => console.log("mongo db connected"))
  .catch(err => console.log(err, "connection failed"));

const personcheme = new mongoose.Schema({
  email: String,
  password: String,
});

const person = mongoose.model("person", personcheme);

// GET
app.get("/", (req, res) => {
  res.send("hello");
});

// POST (CREATE)
app.post("/post", async (req, res) => {
  try {
    const user = req.body;

    const newuser = await person.create(user); // ✅ added await

    res.status(200).json({
      message: "data successfully",
      data: newuser
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed" });
  }
});

// PUT (UPDATE)
app.put("/post/:id", async (req, res) => {
  try {
    await person.findByIdAndUpdate(req.params.id, req.body); // ✅ cleaned

    res.status(200).json({ message: "person updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error updating data" });
  }
});

// DELETE
app.delete("/post/:id", async (req, res) => {
  try {
    await person.findByIdAndDelete(req.params.id); // ✅ fixed method name

    res.status(200).json({ message: "person deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error deleting data" });
  }
});

app.listen(8080, () => {
  console.log("server created");
});