const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello from Service Two!');
});

app.listen(PORT, () => {
    console.log(`Service Two running on port ${PORT}`);
});

