const { MongoClient } = require("mongodb")

const uri = "mongodb+srv://arnavkadoo:iamarnav@cluster0.99nd64h.mongodb.net/summarizers"
const client = new MongoClient(uri);
async function run() {
    try {
        await client.connect();
        // database and collection code goes here
        const db = client.db("summarizers");
        const coll = db.collection("summaries");

        // insert code goes here
        const docs = [
            { name: "Mohit", transcript: "Yelo.... paani peelo" },
        ];

        const result = await coll.insertMany(docs);

        // display the results of your operation
        console.log(result.insertedIds);

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
