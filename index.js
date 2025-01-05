const express = require("express"); //help in building API
const bodyParser = require("body-parser"); //to parse in json format
const mongoose = require("mongoose"); //to connect with mongoDB
const cors = require("cors");
const route=require('./routes/index.js')
const db=require('./config/mongoose.js')

//initilize the app
const app = express();

app.use(express.urlencoded({extended:true}));

//middleware setup
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/',route)


//port
const PORT = process.env.PORT || 5793;
app.listen(PORT, (err) => {
  if (err) {
    console.log("err ", err);
  } else {
    console.log("server is running in ", PORT);
  }
});
