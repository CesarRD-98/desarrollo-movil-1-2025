const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
        const extImage = path.extname(file.originalname)
        const uniqueNameImage = `${Date.now()}-${Math.round(Math.random() * 1E9)}${extImage}`
        cb(null, uniqueNameImage)
    }
})

const upload = multer({storage})

module.exports = upload