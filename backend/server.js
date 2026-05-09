const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const bookingsRouter = require("./routes/bookings");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files from the current directory (where frontend files are now located)
app.use(express.static(path.join(__dirname)));

app.use("/api/bookings", bookingsRouter);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

