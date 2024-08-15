const { info } = require("console");
const express = require("express");
const app = express();

app.get("/", (req, res) => res.json({ info: "Express on Vercel" }));
app.get("/api", (req, res) => res.json({ Info: "API on Vercel" }));
app.get("/api/v1", (req, res) => res.json({ info: "API v1 on Vercel" }));
app.get("/api/v1/express", (req, res) => {
  req.query.name
    ? res.json({
        Sapaan: `Hello, ${req.query.name}!`,
        info: "Nama diambil dari query",
      })
    : res.json({
        error: "Query tidak ditemukan / tidak ada nama yang diinputkan",
      });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
