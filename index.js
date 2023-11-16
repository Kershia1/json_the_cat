const request = require('request');

//user CLI Logic and input goes here, no console/logs by the end 

// Check if the user provided a breed name as a command-line argument

const { fetchBreedDescription } = require('./breedfetcher');

//access the breedname in url search
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.error('Error ftch details: ', error);
  } else {
    console.log(desc);
  }
});

// Construct the API request URL with the specified breed name
const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${encodeURIComponent(breedName)}`;

// Make the API request
request(apiUrl, function(error, response, body) {
  if (error) {
    console.error('Error:', error);
    return;
  } else {
    response('Status Code: 200');
  }

  //creates an object
  const data = JSON.parse(body);

  // Check if the breed was found, if nothing
  if (data.length === 0) {
    console.error(`Breed "${breedName}" not found.`);
    return;
  }
});