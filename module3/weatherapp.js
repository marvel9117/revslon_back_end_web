// Making HTTP GET  request to an weather api
//Expanation on callback: 
//  callback function (res) => { } runs once the server sends a response
//  each piece of data is saved to the chunk variable which is appended to data  string
//  .on(e, l) method: register callback  for an event (data, end, error)
//   listener - function that will be called when an event is trigered

const http = require('http');

// Weather API URL for a specific city (london)
const city = 'London';
const url = `http://wttr.in/${city}?format=%C+%t`;

// Make an HTTP GET request
http.get(url, (res) => {
    let data = '';

    // Collect data chunks
    res.on('data', (chunk) => {
        data += chunk;
    });

    // When the response is complete
    res.on('end', () => {
        console.log(`Weather in ${city}: ${data}`);
    });

}).on('error', (err) => {
    console.error('Error:', err.message);
});


