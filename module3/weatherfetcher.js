// Fetch data from a Weather API asynchronously


const https = require('https');

// URL to get weather data from wttr.in 
const city = 'London';
const url = `https://wttr.in/${city}?format=%C+%t`;

async function fetchWeatherData() {
  try {
    // Fetch the data using a Promise with async/await
    const data = await new Promise((resolve, reject) => {
      https.get(url, (res) => {
        let data = '';

        // Collect data chunks
        res.on('data', (chunk) => {
          data += chunk;
        });

        // When the response is complete, resolve the promise
        res.on('end', () => {
          resolve(data);
        });
      }).on('error', (err) => {
        reject(err);
      });
    });

    // Log the fetched weather data
    console.log(`Weather in ${city}: ${data}`);
  } catch (error) {
    // Handle any errors that may occur
    console.error('Error fetching weather data:', error.message);
  }
}

// Calling the async function
fetchWeatherData();
