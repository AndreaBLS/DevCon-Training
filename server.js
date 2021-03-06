const express = require("express");
const mongoose = require("mongoose");


const users = require("./routes/api/users")
const profiles = require("./routes/api/profiles")
const posts = require("./routes/api/posts")

const app = express()

// Body parses middleware
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err))

app.get("/", (req, res) => res.send("Hello"));

// Use Routes
app.use("/api/users", users)
app.use("/api/profiles", profiles)
app.use("/api/posts", posts)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`));

