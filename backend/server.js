const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const FoodItem = require('./models/foodItems.model.ts');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://mphomakgwe4:cB2NeXeIwUKtmMVY@kitchen-stories.lnty9.mongodb.net/kitchen-stories', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

// Add initial data to the database
const addInitialData = async () => {
    const data = [
        { name: "Rice", price: 5.99 },
        { name: "Bread", price: 2.49 },
        { name: "Pasta", price: 3.99 },
        { name: "Milk", price: 1.99 },
        { name: "Eggs", price: 2.99 }
    ];

    try {
        await FoodItem.insertMany(data);
        console.log('Initial data added to the database');
    } catch (err) {
        console.error('Error adding data:', err.message);
    }
};

// Connect to the database and add initial data
connectDB().then(() => addInitialData());

// API endpoint to fetch data
app.get('/api/food-items', async (req, res) => {
    try {
        const foodItems = await FoodItem.find();
        res.json(foodItems);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
