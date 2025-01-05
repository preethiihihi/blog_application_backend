const mongoose = require("mongoose");

let db;

const uri =
  "mongodb+srv://preethichitte1:aKWMZcHZxieul6UC@cluster0.d7m1j.mongodb.net/Blog_Application?retryWrites=true&w=majority&appName=Cluster0";
//const uri ='mongodb+srv://cp932004:JYPY2eR5lv8KG3UA@cluster0.ubnldgz.mongodb.net/dashboard?retryWrites=true&w=majority'
  ;
  
const EstablishConnection =  () => {
     mongoose.connect(uri).then(()=>{
          console.log("connected successful");
          db=mongoose.connection
        }).catch((err)=>{
          console.log("error",err);
        });
};

EstablishConnection();

module.exports = db;
