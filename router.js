const router = require('express').Router()
const userController = require('../Controllers/userController')

router.post('/create-user', userController.newUser);
router.get('/get-user', userController.getUser);

module.exports = router;