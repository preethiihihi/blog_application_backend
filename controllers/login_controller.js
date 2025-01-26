const Users =  require('../models/users')
module.exports.login = async (req, res) => {
  console.log("i came here");
  try {
    const { username, password } = req.body;
    const user = await Users.findOne({ username });

    if(!user){
      return res.status(200).json({
        message:"user not registered"
      })
    }

    if(password!=user.password){
      return res.status(200).json({
        message:"incorrect password"
      })
    }

    return res.status(200).json({
      message: "login success gh",
      username: username,
    });
  } catch (error) {
    return res.status(200).json({
      message: "internal server problem",
    });
  }
};
