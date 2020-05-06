// IMPORT MODULES under test here:
// import example from '../src/example.js';
const { mungeLocation } = require('../utils.js');
const data = require('../data/geo.json');

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