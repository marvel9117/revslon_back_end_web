//REST API endpoint that returns a JSON object (a list of names) 

const express = require('express');
const app = express();

// Port for the server
const PORT = 3000;

// Endpoint to return a list of names
app.get('/names', (req, res) => {
    const names = ['Marvel', 'Bisi', 'Titi', 'Revslon', 'Ebuka'];

    // Respond with the list as a JSON object
    res.json({
        success: true,
        data: names
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

