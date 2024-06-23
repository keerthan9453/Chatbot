const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Middleware for parsing JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API endpoint to handle user queries
app.post('/api/query', (req, res) => {
    const query = req.body.text;

    // Make a request to the Cohere API
    axios.post('https://api.cohere.com/command', {
        text: query,
        model: "command"
    }, {
        headers: {
            Authorization: 'Bearer YOUR_COHERE_API_KEY'
        }
    })
    .then(response => {
        const chatbotResponse = response.data.results[0].response;
        res.json({ response: chatbotResponse });
    })
    .catch(error => {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error.' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
