const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 3000 },
    { id: 2, name: "Washing Machine", price: 10000 },
    { id: 3, name: "Bag", price: 20 }
  ]);
});

app.listen(PORT, () => {
  console.log("Backend Running");
});
