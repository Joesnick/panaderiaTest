import { Decimal128, Double } from "mongodb";
import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Decimal128,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Boolean,
        default: true
    }
}
);

const Products = mongoose.model("Products", productsSchema);

export default Products;