const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

// const productRoutes = require('./routes/product')

const app = express();
dotenv.config();
const port = process.env.PORT || 9000;
connectDB();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/apis/movies",require("./routes/favorite"));
app.use("/apis/user",require("./routes/auth"))

///Uploading file
// app.use("/images", express.static(path.join(__dirname, "/upload/image"))); //getting image from data

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});


