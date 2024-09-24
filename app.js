// app.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS) from the root directory
app.use(express.static(__dirname));

// Serve the index.html file when the root route is accessed
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});