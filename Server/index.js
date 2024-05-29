const express = require('express');
const connectDB = require('./db.js');
const Form = require('./models/Form');
const Cors = require('cors');
const app = express();

app.use(express.json());
app.use(Cors());

app.post('/api/forms', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const newForm = new Form({ name, email, phone, message });
        await newForm.save();
        res.status(201).send(newForm);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.listen(3000, async () => {
    await connectDB();
    console.log('App is running..');
});