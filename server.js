import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "My Express App" });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});