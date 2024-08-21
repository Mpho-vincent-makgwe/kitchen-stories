const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://mphomakgwe4:cB2NeXeIwUKtmMVY@kitchen-stories.lnty9.mongodb.net/`, {

        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB();

// Example API endpoint to fetch data
app.get('/api/food-items', async (req, res) => {
  try {
      const foodItems = await FoodItem.find(); // FoodItem model should be defined
      res.json(foodItems);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
  }
})

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
