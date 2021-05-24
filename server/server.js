const express = require("express");
const mongoose = require("mongoose");
const user = require("./models/user");
const app = express();

const API_PORT = process.env.PORT || 8080;

app.use(express.json());  // middleware app to recognize incoming object as JSON for Post/Put

const dbPath =
  "mongodb+srv://ghagerty:ghagerty@cluster0.b9mfg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(dbPath, {
    dbName: "testing_user",
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Connected to the DB.");
  }).catch((err) => console.log("Error connecting to the database."));

  app.post("/", (req, res) => {
    const {firstName, lastName} = req.body;

    let newUser = new user({
        firstName,
        lastName
    });

    newUser
        .save()
        .then((user) => {
            console.log("User Name Saved");
            res.json(user);
        })
        .catch(err => {
            console.log("Error saving User Name")
            res.send("ERROR")
        });
    });      

app.listen(API_PORT, () => console.log(`Listening on Port ${API_PORT}`));
