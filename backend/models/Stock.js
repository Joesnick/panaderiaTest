import mongoose from "mongoose";

const stockSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    stock: {
        type: Number,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    }
},
    {
        timestamps: true,
    }
);

const Stock = mongoose.model("Stock", stockSchema);

export default Stock;