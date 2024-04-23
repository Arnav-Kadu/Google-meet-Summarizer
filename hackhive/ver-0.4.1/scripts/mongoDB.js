const fs = require('fs');
const csv = require('csv-parser');
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'your_database_name';

// Collection Name
const collectionName = 'your_collection_name';

// Path to your CSV file
const csvFilePath = 'path_to_your_csv_file';

// Function to read and insert data from CSV to MongoDB
async function importCSVToMongoDB() {
    // Create a new MongoClient
    const client = new MongoClient(url);

    try {
        // Connect to MongoDB Server
        await client.connect();

        // Select the database
        const db = client.db(dbName);

        // Select the collection
        const collection = db.collection(collectionName);

        // Read CSV file and insert data into MongoDB
        fs.createReadStream(csvFilePath)
            .pipe(csv())
            .on('data', async (row) => {
                // Insert each row into MongoDB as a document
                await collection.insertOne(row);
            })
            .on('end', () => {
                console.log('CSV file successfully imported to MongoDB.');
                // Close the connection
                client.close();
            });
    } catch (err) {
        console.error('Error:', err);
    }
}

// Call the function to import CSV to MongoDB
importCSVToMongoDB();
