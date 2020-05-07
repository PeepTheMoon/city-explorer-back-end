
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const { mungeLocation, mungeWeather, mungeTrails } = require('./utils.js');
const request = require('superagent');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());


app.get('/location', async(req, res) => {
    try {
        const data = await request.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATION_IQ_KEY}&q=${req.query.search}&format=json`);

        const mungedData = mungeLocation(data.body);
    
        res.json(mungedData);
    } catch (e) {
        console.error(500, 'Oops, you f-ed up buddy');
        res.json({
            status: 500,
            responseText: 'Oops, you f-ed up buddy',
        });
    }
});


app.get('/weather', async(req, res) => {
    try {
        const data = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${req.query.latitude}&lon=${req.query.longitude}&key=${process.env.WEATHER_KEY}`);

        const mungedData = mungeWeather(data.body);
        
        res.json(mungedData);
    } catch (e) {
        console.error(500, 'Oops, you f-ed up buddy');
        res.json({
            status: 500,
            responseText: 'Oops, you f-ed up buddy',
        });
    }
});

app.get('/trails', async(req, res) => {
    try {
        const data = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${req.query.latitude}&lon=${req.query.longitude}&key=${process.env.WEATHER_KEY}`);

        const mungedData = mungeTrails(data.body);
        
        res.json(mungedData);
    } catch (e) {
        console.error(500, 'Oops, you f-ed up buddy');
        res.json({
            status: 500,
            responseText: 'Oops, you f-ed up buddy',
        });
    }
});


app.listen(PORT, () => console.log(`running on port ${PORT}`));