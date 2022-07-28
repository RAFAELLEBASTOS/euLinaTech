const bcrypt = require("bcrypt");

exports.hashPassword = async(password, response) => {
  try{
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    return hash
  } catch (err) {
    response.status(500).json({message: err.message})
  }
}