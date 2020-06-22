const express = require('express');
const router = require('./routes'); // Routing module
const app = express();
const port = 3000; // Port to run

// Connect to database
const mongoose = require('mongoose');
mongoose.connect(
    process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);

// Body parsing as JSON
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Enable cors
app.use('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update later
    // Allowed headers
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    // Allowed request methods
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE"
    );
    next();
});

// Testing endpoint
app.get('/test', async(req, res) => {
    return res.json({ "status": "working v1.0" });
});

// Routing module API v1
app.use('/api', router);

app.listen(port, () => console.log(`Server listening on port ${port}!`));