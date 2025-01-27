/*import express from 'express';
import bodyParser from 'body-parser';

const server = express();
const port = 3000;

server.use(bodyParser.json());

const items = [
  { id: 1, name: "Watch" },
  { id: 2, name: "Bracelet" },
  { id: 3, name: "Jeans" }
];

server.get('/', (req, res) => {
  res.send('Server is Running');
});

server.get('/products', (req, res) => {
  res.send(items);
});

server.post('/products', (req, res) => {
  items.push({ id: items.length + 1, name: req.body.name });
  res.status(200).send(items);
});

server.delete('/products/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id === itemId);

  if (itemIndex !== -1) {
    items.splice(itemIndex, 1); 
    res.json(items); 
  } else {
    res.status(404).send('Item not found');
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
*/
/*
const exp = require('express');
const server = exp();
const port = 5000;
const mongoose = require('mongoose');
require('dotenv').config();

const items = [
    { id: 1, name: "jeans" },
    { id: 2, name: "shirts" },
    { id: 3, name: "t-shirts" }
];

const mongo_uri = process.env.mongo_uri;
mongoose.connect(mongo_uri)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection error:", error));

server.use(exp.json());

server.get('/', (req, res) => {
    res.end("Server is running");
});

server.get('/product', (req, res) => {
    res.json(items);
});

server.post('/product', (req, res) => {
    const newItem = { id: items.length + 1, name: req.body.name };
    items.push(newItem);
    res.status(201).json(newItem);
});

server.put('/product/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const itemIndex = items.findIndex(item => item.id === itemId);

    if (itemIndex !== -1) {
        items[itemIndex].name = req.body.name;
        res.json(items[itemIndex]);
    } else {
        res.status(404).json({ error: "Item not found" });
    }
});

server.listen(port, () => {
    console.log(Server running on port ${port});
});

*/
/*

const express = require('express');
const mongoose = require('mongoose');
const server = express();
const port = 5000;

// MongoDB Atlas connection string
const databaseName = "mern"; // Replace with your database name
const collectionName = "db1"; // Replace with your collection name
const dbURI = mongodb+srv://testUser:TSX8uNGoZc2AuteR@cluster0.7zpc1wb.mongodb.net/${databaseName}?retryWrites=true&w=majority;

let dbConnected = false; // Flag to check MongoDB connection status
let Product; // Model placeholder

// Attempt to connect to MongoDB
mongoose.connect(dbURI)
    .then(() => {
        console.log(Connected to MongoDB Atlas database: ${databaseName});
        dbConnected = true;

        // Define a Mongoose schema and model for products
        const productSchema = new mongoose.Schema({
            name: { type: String, required: true }, // Product name
            price: { type: Number, required: true } // Product price
        });

        Product = mongoose.model('Product', productSchema, collectionName);
    })
    .catch(err => {
        console.error("Error connecting to MongoDB Atlas:", err);
    });

// Middleware to parse JSON request body
server.use(express.json());

// Root route
server.get('/', (req, res) => {
    res.end(dbConnected
        ? "Server is running and connected to MongoDB Atlas"
        : "Server is running in standalone mode");
});

// GET route to fetch all products
server.get('/product', async (req, res) => {
    if (dbConnected) {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (err) {
            res.status(500).json({ message: "Error fetching products", error: err });
        }
    } else {
        res.status(503).json({ message: "Database is not connected" });
    }
});

// POST route to add a new product
server.post('/product', async (req, res) => {
    const { name, price } = req.body;

    // Validate input
    if (!name || price === undefined) {
        return res.status(400).json({ message: "Both name and price are required" });
    }

    if (dbConnected) {
        try {
            const newProduct = new Product({ name, price });
            const savedProduct = await newProduct.save();
            res.status(201).json({
                message: "Item added successfully",
                product: savedProduct
            });
        } catch (err) {
            res.status(500).json({ message: "Error adding product", error: err });
        }
    } else {
        res.status(503).json({ message: "Database is not connected" });
    }
});

// PUT route to update an existing product by ID
server.put('/product/:id', async (req, res) => {
    const productId = req.params.id;
    const { name, price } = req.body;

    if (!name || price === undefined) {
        return res.status(400).json({ message: "Both name and price are required for update" });
    }

    if (dbConnected) {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(
                productId,
                { name, price },
                { new: true, runValidators: true }
            );
            if (updatedProduct) {
                res.json({
                    message: "Product updated successfully",
                    product: updatedProduct
                });
            } else {
                res.status(404).json({ message: "Product not found" });
            }
        } catch (err) {
            res.status(500).json({ message: "Error updating product", error: err });
        }
    } else {
        res.status(503).json({ message: "Database is not connected" });
    }
});

// DELETE route to delete a product by ID
server.delete('/product/:id', async (req, res) => {
    const productId = req.params.id;

    if (dbConnected) {
        try {
            const deletedProduct = await Product.findByIdAndDelete(productId);
            if (deletedProduct) {
                res.json({
                    message: "Product deleted successfully",
                    product: deletedProduct
                });
            } else {
                res.status(404).json({ message: "Product not found" });
            }
        } catch (err) {
            res.status(500).json({ message: "Error deleting product", error: err });
        }
    } else {
        res.status(503).json({ message: "Database is not connected" });
    }
});

// Start the server
server.listen(port, () => {
    console.log(Server is running on http://localhost:${port});
});

*/



/*
Task Day13
Code Part


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/school', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB')).catch(err => console.error('MongoDB connection error:', err));

// Define Mongoose Schema and Model
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    class: { type: String, required: true },
    section: { type: String }
});

const Student = mongoose.model('Student', studentSchema);

// POST /students: Add a new student
app.post('/students', async (req, res) => {
    try {
        const { name, age, class: studentClass, section } = req.body;
        if (!name || !age || !studentClass) {
            return res.status(400).json({ error: 'Name, age, and class are required.' });
        }
        const student = new Student({ name, age, class: studentClass, section });
        await student.save();
        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add student.' });
    }
});

// GET /students: Fetch all students
app.get('/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch students.' });
    }
});

// GET /students/:id: Fetch student by id
app.get('/students/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found.' });
        }
        res.status(200).json(student);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch student.' });
    }
});

// PUT /students/:id: Update student by id
app.put('/students/:id', async (req, res) => {
    try {
        const { name, age, class: studentClass, section } = req.body;
        if (!name || !age || !studentClass) {
            return res.status(400).json({ error: 'Name, age, and class are required.' });
        }
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            { name, age, class: studentClass, section },
            { new: true, runValidators: true }
        );
        if (!student) {
            return res.status(404).json({ error: 'Student not found.' });
        }
        res.status(200).json(student);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update student.' });
    }
});

// DELETE /students/:id: Delete student by id
app.delete('/students/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found.' });
        }
        res.status(200).json({ message: 'Student deleted successfully.' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete student.' });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


*/