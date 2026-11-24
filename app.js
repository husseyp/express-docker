import express from "express";

export const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "My Express App" });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});
