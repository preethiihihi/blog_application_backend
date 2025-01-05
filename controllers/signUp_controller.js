const User=require('../models/users')

module.exports.signUp = async(req, res) => {
     const { username, email, password } = req.body;
     const newUser=new User({
                username:username,
                email:email,
                password:password
     })
     await newUser.save();


     res.status(200).json({
       message: "login success gh",
       username: username,
     });
   };