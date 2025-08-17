const express = require('express');
const app = express();
const PORT = 3000;

// Route for demo
app.get('/', (req, res) => {
    res.send('Hello World from Project 2!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
