const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

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
