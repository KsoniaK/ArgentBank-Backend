const axios = require('axios')
const signupApi = 'http://localhost:3001/api/v1/user/signup'

const users = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@stark.com',
    password: 'password123',
    userName: 'Iron'
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steve@rogers.com',
    password: 'password456',
    userName: 'Captain'
  }
]


async function populateUsers() {
  for (const user of users) {
    try {
      const response = await axios.post(signupApi, user);
      console.log("Utilisateur créé :", response.data.body.email);
    } catch (error) {
      if (error.response) {
        console.error(
          "Erreur API :",
          error.response.data.message || error.response.status
        );
      } else {
        console.error("Erreur serveur :", error.message);
      }
    }
  }
}

populateUsers();
