const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

// Provide backend URL to frontend
const backendUrl = process.env.BACKEND_URL || 'http://localhost:8080';

app.get('/backend-url', (req, res) => {
    res.json({ backendUrl });
});

app.listen(3000, () => {
    console.log('Frontend server running on port 3000');
});
