const Users = require("../models/users");

module.exports.signUp = async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    const user = await Users.findOne({ username });

    if(password!=confirmPassword){
      return res.status(200).json({
        message:"confirmPassword and password dosen't match"
      })
    }

    if (user) {
      return res.status(200).json({
        message: "UserName exists try another username",
      });
    }

    const newUser = new Users({
      username: username,
      email: email,
      password: password,
    });
    await newUser.save();

    return res.status(200).json({
      message: "signUp success",
    });
  } catch (error) {
    return res.send(200).json({
      message: "something went wrong",
    });
  }
};
