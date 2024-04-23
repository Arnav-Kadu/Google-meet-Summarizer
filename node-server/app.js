const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());
// MongoDB connection
mongoose.connect('mongodb+srv://arnavkadoo:iamarnav@cluster0.99nd64h.mongodb.net/summarizers')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


// Define a schema and model if you haven't
const MessageSchema = new mongoose.Schema({
  content: String,
});
const Message = mongoose.model('Message', MessageSchema);

// Define routes
app.post('/message', async (req, res) => {
  try {
    const message = new Message({ content: req.body.content });
    await message.save();
    res.status(200).send('Message saved successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});