const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname)); // serve HTML file

app.listen(3000, () => {
    console.log('Frontend server running on port 3000');
});
