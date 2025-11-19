import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let fruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" }
];

app.get("/api/fruits", (req, res) => {
  res.json(fruits);
});

app.post("/api/fruits", (req, res) => {
  const newFruit = { id: Date.now(), name: req.body.name };
  fruits.push(newFruit);
  res.json(newFruit);
});

app.delete("/api/fruits/:id", (req, res) => {
  const id = Number(req.params.id);
  fruits = fruits.filter(f => f.id !== id);
  res.json({ id });
});

app.listen(3000, () => console.log("Server running on port 3000"));
