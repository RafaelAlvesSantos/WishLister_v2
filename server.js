const express = require("express");
const connectDB = require("./config/db");

// Session
const app = express();
connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
