const userController = require('../controllers/userController');
const isAdmin = require ('../middleware/isAdmin')
const verifyToken = require('../middleware/verifyToken');

const router = require('express').Router();

router.get('/all', verifyToken, isAdmin, userController.getAllUsers);
router.get('/profile', verifyToken, userController.getUserProfile);
router.put('/profile', verifyToken, userController.updateUserProfile);
router.get('/doctor-info', verifyToken, userController.getDoctorData)
module.exports = router;