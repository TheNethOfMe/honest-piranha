const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const series = require("./routes/api/series");
const entries = require("./routes/api/entries");
const messages = require("./routes/api/messages");
const comments = require("./routes/api/comments");
const tickets = require("./routes/api/tickets");
const menu = require("./routes/api/menu");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport.js")(passport);

app.use("/api/users", users);
app.use("/api/series", series);
app.use("/api/entries", entries);
app.use("/api/messages", messages);
app.use("/api/comment", comments);
app.use("/api/tickets", tickets);
app.use("/api/menu", menu);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Piranhas swimming on port ${port}`));
