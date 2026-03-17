// Il sert à définir la structure des données User dans MongoDB.

// On importe Mongoose pour pouvoir :
  // - créer un schéma,
  // - créer un modèle,
  // - interagir avec MongoDB.
const mongoose = require('mongoose')

// Ici, on crée un nouveau schéma = c’est le plan de l’objet User en base.
const userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    userName: String,
    accounts : [ // Ajout infos compte
      {
        number: String,
        type: String,
        title: String,
        balance: Number,
      },
    ],
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        delete ret.password
        delete ret.__v
        return ret
      }
    }
  }
)

module.exports = mongoose.model('User', userSchema)
