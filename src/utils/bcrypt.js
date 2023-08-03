const bcrypt = require("bcryptjs");

exports.hashPassword = async (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

exports.comparePassword = async (password) => {
  const isMatch = await bcrypt.compareSync(password, hash);
  return isMatch;
};