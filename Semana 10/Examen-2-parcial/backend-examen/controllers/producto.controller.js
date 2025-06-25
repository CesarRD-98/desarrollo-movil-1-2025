const Producto = require('../models/producto.model')

const getProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll()
        res.status(200).json(productos)
    } catch (error) {
        console.log('Error en getProductos', error);
    }
}

const createProducto = async (req, res) => {
    try {
        const { nombre, descripcion, precio, estado, categoria, url_foto } = req.body
        await Producto.create({
            nombre,
            descripcion,
            precio,
            estado,
            categoria,
            url_foto
        })

        res.status(201).json({message: 'Exito'})
    } catch (error) {
        console.log('Error en createProducto', error);
    }
}

const deleteProducto = async (req, res) => {
    try {
        await Producto.destroy({
            where: {id: req.params.id}
        })

        res.status(200).json({message: 'Eliminado'})
    } catch (error) {
        console.log('Error en deleteProducto', error);
    }
}

module.exports = {
    getProductos,
    createProducto,
    deleteProducto
}