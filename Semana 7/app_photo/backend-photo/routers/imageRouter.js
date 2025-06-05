const express = require('express')
const imageController = require('../controllers/imageController')
const upload = require('../middlewares/imageMiddleware')
const router = express.Router()

router.post('/upload', upload.single('image'), imageController.uploadImageDB)
router.get('/image/:idImage', imageController.getImageDB)

module.exports = router