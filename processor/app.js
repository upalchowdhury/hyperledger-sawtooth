const express = require('express');
const cors = require('cors');

const app = express();


const property = require('./routeTransaction.js');


const port = process.env.PORT || 8080;

// Setup 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Register routes
app.get('/health', (req, res) => {
    res.json({
        message: '200'
    })
})
app.use('/api', property)


const start = async () => {
    try {
        app.listen(port, '0.0.0.0', () => {
            console.log(`Server running on http://localhost:${port}/health`)
        })
    } catch (error) {
        console.error('Failed start server', error)
    }
}

start();