const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection string
const mongoURI = 'mongodb+srv://mphomakgwe4:cB2NeXeIwUKtmMVY@kitchen-stories.lnty9.mongodb.net/mydatabase?retryWrites=true&w=majority';
const DATABASEName = "Angular";
const COLLECTIONName = "kitchen-stories"; // Define your collection name here
const COLLECTIONNAME2 = "dishes"; // Define your collection name here


const storage = multer.memoryStorage(); // Store files in memory (useful for small files)
const upload = multer({ storage });

// MongoDB connection
const connectDB = async () => {
  let client;

  try {
    // Connect to MongoDB
    client = await MongoClient.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully');

    const database = client.db(DATABASEName);
    const collection = database.collection(COLLECTIONName);

    // Fetch data from the collection
    const data = await collection.find({}).toArray();

    // Convert the data to JSON and log it
    // console.log('Data fetched from MongoDB:', JSON.stringify(data, null, 2));

    return data;
  } catch (err) {
    console.error('Error fetching data from MongoDB:', err.message);
  } finally {
    // Close the connection to the database
    if (client) {
      client.close();
    }
  }
};

connectDB().then(data => {
    app.listen(5020, () => {
      console.log(`Server running on port 5020`);
    });
    // console.log('Data processing complete:', data);
}).catch(err => {
  console.error('Data processing failed:', err.message);
});

// API endpoint to fetch data
app.get('/api/food-items', async (req, res) => {
    try {
        const client = await MongoClient.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const database = client.db(DATABASEName);
        const collection = database.collection(COLLECTIONName);

        // Fetch data from the collection
        const foodItems = await collection.find({}).toArray();

        res.json(foodItems);
        client.close();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});


// Fetch API data and insert it into MongoDB under a dynamic collection name
const fetchAndInsertApiData = async () => {
    // Connect to MongoDB
    const client = await MongoClient.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const database = client.db(DATABASEName);
    const collection = database.collection(COLLECTIONNAME2);
    // const insertData = JSON.stringify(result.dishes, null, 2);

    // console.log('insert data:', insertData);
    // Insert the fetched data into MongoDB
    const getResult = await collection.find({}).toArray();
    console.log(`Data from MongoDB collection '${COLLECTIONNAME2}':`, getResult);
        client.close();
    return getResult
    // Close the MongoDB connection


  }
fetchAndInsertApiData();



