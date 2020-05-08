function mungeLocation(locationData) {
    try {
        const firstItem = locationData[0];
        return {
            formatted_query: firstItem.display_name,
            latitude: firstItem.lat,
            longitude: firstItem.lon
        };
    } catch (e) {
        return {};
    }
}


function mungeWeather(weatherData) {

    try {
        const transformedData = weatherData.data.map((forecast) => {
            return {
                forecast: forecast.weather.description,
                time: forecast.valid_date
            };
        });
        return transformedData.slice(0, 8);

    } catch (e) {
        return [{}];
    }
}

function mungeTrails(trailData) {

    try {
        const transformedData = trailData.trails.map((trail) => {
            return {
                name: trail.name,
                location: trail.location,
                length: trail.length,
                stars: trail.stars,
                star_votes: trail.starVotes,
                summary: trail.summary,
                trail_url: trail.url,
                conditions: trail.conditionStatus,
                condition_date: trail.conditionDate,
            };
        });
        return transformedData.slice(0, 10);

    } catch (e) {
        return [{}];
    }
}

function mungedReviews(reviewData) {

    try {
        const transformedData = reviewData.reviews.map((review) => {
            return {
                id: review.id,
                rating: review.rating,
            };
        });
        return transformedData.slice(0, 20);

    } catch (e) {
        return [{}];
    }
}

module.exports = {
    mungeWeather,
    mungeLocation,
    mungeTrails,
    mungedReviews
};