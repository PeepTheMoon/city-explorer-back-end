// IMPORT MODULES under test here:
// import example from '../src/example.js';
const { mungeLocation, mungeWeather } = require('../utils.js');
const data = require('../data/geo.json');
const weatherData = require('../data/weather.json');



const test = QUnit.test;

test('should return portland data with a portland api response', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        'formatted_query': 'Portland, Multnomah County, Oregon, USA',
        'latitude': '45.5202471',
        'longitude': '-122.6741949'
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const results = mungeLocation(data);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});
//do another test to check about an empty object!

test('should return empty obj with invalid input', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = {};
    //Act 
    // Call the function you're testing and set the result to a const
    const results = mungeLocation(null);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});


test('should return weather data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = [
        {
            forecast: 'Scattered clouds',
            time: '2020-05-05'
        },
        {
            forecast: 'Light snow',
            time: '2020-05-06'
        },
        {
            forecast: 'Few clouds',
            time: '2020-05-07'
        },
        {
            forecast: 'Few clouds',
            time: '2020-05-08'
        },
        {
            forecast: 'Broken clouds',
            time: '2020-05-09'
        },
        {
            forecast: 'Overcast clouds',
            time: '2020-05-10'
        },
        {
            forecast: 'Overcast clouds',
            time: '2020-05-11'
        },
        {
            forecast: 'Light rain',
            time: '2020-05-12'
        },
    ]; 

    //Act 
    // Call the function you're testing and set the result to a const
    const results = mungeWeather(weatherData);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});

//do another test to check about an empty object!

test('should return empty obj with invalid input', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = [{}];
    //Act 
    // Call the function you're testing and set the result to a const
    const results = mungeWeather(null);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(results, expected);
});