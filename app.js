// Import express
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to handle JSON
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello World! 🚀 Your app.js is running.");
});

// Example API route
app.get("/api", (req, res) => {
  res.json({ message: "This is data from your API." });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
