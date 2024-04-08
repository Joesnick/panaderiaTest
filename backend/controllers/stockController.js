import Stock from '../models/Stock.js';

// addComment Func
const addStock = async (req, res) => {
    try {
        const stock = new Stock(req.body);
        const savedStock = await stock.save();
        res.json(savedStock);
    } catch (error) {
        console.log(error);
    }
};

// getComments Func
const getStock = async (req, res) => {
    try {
        const stocks = await Stock.find();
        res.json(stocks);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error getting Stock..');
    }
};

// deleteComment Func
const deleteStock = async (req, res) => {
    const stockId = req.params.stockId;

    try {
        const deletedStock = await Stock.findByIdAndDelete(stockId);

        if (!deletedStock) {
            return res.status(404).send('Product Not Found!');
        }
        res.json(deletedStock);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error Trying to Remove Product from Stock');
    }
};

export { addStock, getStock, deleteStock };
