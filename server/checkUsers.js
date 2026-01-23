const dbConnection = require('./database/connection');
const User = require('./database/models/userModel');

async function checkUsers() {
  await dbConnection(); // connecte à MongoDB
  const users = await User.find();
  console.log(users);
  process.exit();
}

checkUsers();
