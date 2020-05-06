
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const { mungeLocation } = require('./utils.js');
const locationData = require('./data/geo.json');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());


app.get('/location', (req, res) => {
    const mungedData = mungeLocation(locationData);

    res.json(mungedData);
});

app.get('/weather', (req, res) => {
    console.log('you hit the weather route');
    res.json([
        {
            'forecast': 'Partly cloudy until afternoon.',
            'time': 'Mon Jan 01 2001'
        },
        {
            'forecast': 'Mostly cloudy in the morning.',
            'time': 'Tue Jan 02 2001'
        },
    ]);
});


app.listen(PORT, () => console.log(`running on port ${PORT}`));