import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js"
import usersRoutes from './routes/usersRoutes.js';
import stockRoutes from './routes/stockRoutes.js';
import proyectRoutes from './routes/proyectRoutes.js';
import productRoutes from './routes/productRoutes.js';

const app = express();

app.use(express.json());

dotenv.config();

conectarDB();

// Routing
// app.get('/', (req, res) => {
//   res.send("Testing..");
// })

app.use("/api/users", usersRoutes);
app.use("/api/stock", stockRoutes);
app.use("/api/products", productRoutes);
app.use("/api/proyects", proyectRoutes);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(`Server running over port ${PORT}`);
});
