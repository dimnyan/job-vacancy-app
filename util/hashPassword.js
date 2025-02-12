var bcrypt = require('bcryptjs');

const saltRounds = 10;

// hashPassword returns the hash result of the password inputted
function hashPassword(password) {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt)
}

// comparePassword compares plain inputted pass and pass from db and then returns boolean
function comparePassword(inputtedPass, actualPass) {
  return bcrypt.compareSync(inputtedPass, actualPass)
}

export { hashPassword, comparePassword }