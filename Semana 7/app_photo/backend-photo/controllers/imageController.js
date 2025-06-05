const Image = require('../models/image')

async function uploadImageDB(req, res) {
    try {
        const { originalname, filename } = req.file

        const pathImage = `/uploads/${filename}`

        const image = await Image.create({
            nameImage: originalname,
            pathImage
        })
        
        res.status(200).json({ idImage: image.idImage, path: pathImage, message: 'Imagen subida correctamente' })
    } catch (error) {
        console.error('Error uploadImageDB: ', error);
        res.status(500).json({ message: 'Ocurrió un error al subir la imagen' })
    }
}

async function getImageDB(req, res) {
    try {
        const image = await Image.findByPk(req.params.idImage)

        if (image) {
            res.status(200).json({
                idImage: image.idImage,
                nameImage: image.nameImage,
                pathImage: image.pathImage,
                uri: `${req.protocol}://${req.get('host')}${image.pathImage}`
            })
        } else {
            res.status(404).json({ message: 'Imagen no encontrada' })
        }
    } catch (error) {
        console.error('Error getImageDB: ', error);
        res.status(500).json({ message: 'Ocurrió un error al obtener la imagen' })
    }
}

module.exports = {
    uploadImageDB,
    getImageDB
}