// middleware d’authentification JWT : vérifie qu’un token est bien présent dans la requête et qu’il est valide avant de laisser l’utilisateur accéder à une route protégée.
// Ce middleware protège les routes privées.

// C’est la librairie qui permet de :
  // - signer un token,
  // - vérifier un token,
  // - décoder son contenu.
const jwt = require('jsonwebtoken')

module.exports.validateToken = (req, res, next) => {
  // On crée un objet response qui servira à construire la réponse d’erreur si le token n’est pas valide.
  let response = {}

  try {
    if (!req.headers.authorization) {
      throw new Error('Token is missing from header')
    }

    // récupère uniquement le token, sans le mot Bearer.
    const userToken = req.headers.authorization.split('Bearer')[1].trim()
    const decodedToken = jwt.verify(
      userToken,
      process.env.SECRET_KEY || 'default-secret-key'
    )
    return next()
  } catch (error) {
    console.error('Error in tokenValidation.js', error)
    response.status = 401
    response.message = error.message
  }

  return res.status(response.status).send(response)
}
