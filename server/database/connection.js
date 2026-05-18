// // Ce fichier : ouvrir la connexion entre l’application backend et la base de données au démarrage (MongoDB).

// // Mongoose = bibliothèque Node.js qui sert à :
//   // se connecter à MongoDB,
//   // définir des schémas et des modèles,
//   // manipuler les données plus facilement.
// const mongoose = require('mongoose');
// // on définit l’URL de connexion à la base.
// const databaseUrl =
//   process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

// // Ce modeul exporte une fonction qu’on pourra appeler au lancement de l’application, par exemple dans server.js ou app.js
// module.exports = async () => {
//   try {
//     await mongoose.connect(databaseUrl, { useNewUrlParser: true })
//     console.log('Database successfully connected')
//   } catch (error) {
//     console.error(`Database Connectivity Error: ${error}`)
//     throw new Error(error)
//   }
// }


const mongoose = require('mongoose')

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log('Database connected')
  } catch (error) {
    console.error('Database Connectivity Error:', error)
    process.exit(1)
  }
}