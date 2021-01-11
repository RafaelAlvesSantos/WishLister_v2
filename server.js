const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");

// Session
const app = express();
connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
