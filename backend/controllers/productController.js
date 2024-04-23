import Products from "../models/Products.js";

const createProduct = async (req, res) => {
    try {
        // Verificar si el producto ya existe
        const { name } = req.body;
        const existingProduct = await Products.findOne({ name });

        if (existingProduct) {
            return res.status(400).json({ error: "El producto ya existe" });
        }

        // Se crea el producto
        const products = new Products(req.body);
        const savedProduct = await products.save();
        res.json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al crear el producto.');
    }
};

const getProducts = async (req, res) => {
    try {
        const products = await Products.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener el producto');
    }
};

const deleteProduct = async (req, res) => {
    const productsId = req.params.productsId;

    try {
        const deletedProduct = await Products.findByIdAndDelete(productsId);

        if (!deletedProduct) {
            return res.status(404).send('Producto no encontrado.');
        }

    } catch (error) {
        console.error(error);
        res.status(500).send('Error intentando eliminar el producto.');
    }
};

const updateProduct = async (req, res) => {
    const productsId = req.params.productsId;
    const updates = req.body;

    try {
        const updatedProduct = await Products.findByIdAndUpdate(productsId, updates, { new: true });

        if (!updatedProduct) {
            return res.status(404).send('Producto no encontrado');
        }

        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar un producto.');
    }
};

export { createProduct, getProducts, deleteProduct, updateProduct };