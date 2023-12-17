const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const exerciseRoute = require("./routes/exercises")
const scheduleRoute = require("./routes/schedules")

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(
        console.log("connection open")
    )
    .catch((err) =>
        console.log(err)
    );

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/exercises", exerciseRoute);
app.use("/api/schedules",scheduleRoute);


app.listen("5000", () => {
    console.log("backend is running")
})