const express = require('express');
const cors = require('cors');
const client = require('prom-client');

const app = express();

app.use(cors());
app.use(express.json());

// Prometheus metrics setup
const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
});

app.get('/api/todos', (req, res) => {
    res.json([
        { id: 1, text: 'Learn Node.js', done: true },
        { id: 2, text: 'Learn Docker', done: false },
        { id: 3, text: 'Build an app', done: false }
    ]);
});

app.listen(8080, () => {
    console.log('Backend server running on port 8080');
});

