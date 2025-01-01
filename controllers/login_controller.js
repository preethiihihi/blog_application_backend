module.exports.login = (req, res) => {
  const { username, password } = req.body;
  res.status(200).json({
    message: "login success gh",
    username: username,
  });
};
