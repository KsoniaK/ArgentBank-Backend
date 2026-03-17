// Ce fichier joue le rôle de couche de routage.
  // - définir les endpoints,
  // - appliquer les middlewares nécessaires,
  // - rediriger vers les bons controllers.rediriger vers les bons controllers.rediriger vers les bons controllers.

const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const tokenValidation = require('../middleware/tokenValidation')

router.post('/signup', userController.createUser)
router.post('/login', userController.loginUser)

router.get(
  '/profile',
  tokenValidation.validateToken,
  userController.getUserProfile
)

router.put(
  '/profile',
  tokenValidation.validateToken,
  userController.updateUserProfile
)

module.exports = router
