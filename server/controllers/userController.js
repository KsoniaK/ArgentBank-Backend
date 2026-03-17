// Ce fichier permet :
  // - de recevoir la requête HTTP
  // - d'appeler la logique métier dans userService
  // - puis de renvoyer une réponse au client

const userService = require('../services/userService')

module.exports.createUser = async (req, res) => {
  let response = {}

  try {
    // req = la requête envoyée par le client
    const responseFromService = await userService.createUser(req.body) // Ici, on envoie req.body au service
    response.status = 200
    response.message = 'User successfully created'
    response.body = responseFromService
  } catch (error) {
    console.error('Something went wrong in userController.js', error)
    response.status = 400
    response.message = error.message
  }
  // res = la réponse qu’on va renvoyer
    // Express renvoie au client une réponse HTTP avec : 
      // - le code HTTP (200 ou 400)
      // - l’objet response
  return res.status(response.status).send(response)
}

module.exports.loginUser = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.loginUser(req.body)
    response.status = 200
    response.message = 'User successfully logged in'
    response.body = responseFromService
  } catch (error) {
    console.error('Error in loginUser (userController.js)')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.getUserProfile = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.getUserProfile(req)
    response.status = 200
    response.message = 'Successfully got user profile data'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in userController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

module.exports.updateUserProfile = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await userService.updateUserProfile(req)
    response.status = 200
    response.message = 'Successfully updated user profile data'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in updateUserProfile - userController.js')
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}
