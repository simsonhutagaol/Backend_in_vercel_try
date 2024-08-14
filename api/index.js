const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/api", (req, res) => res.send("API on Vercel"));
app.get("/api/v1", (req, res) => res.send("API v1 on Vercel"));
app.get("/api/v1/express", (req, res) => {
  req.query.name
    ? res.send(`Hello, ${req.query.name}!`)
    : res.send("Hello, Express!");
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
