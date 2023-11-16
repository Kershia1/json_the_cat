
const request = require('request');

//handeling and returning fetched data requeted by the user in the CLI Via Index.js

function fetchBreedDescription(breedName, callback) {
// Construct the API request URL with the specified breed name
const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${encodeURIComponent(breedName)}`;

// Make the API request
request(apiUrl, function(error, response, body) {
  if (error) {
    //console.error('Error:', error);
    return callback(error, null);
  } 
  //creates an object
  const data = JSON.parse(body);

  // Check if the breed was found, if nothing
  if (data.length === 0) {
    //console.error(`Breed "${breedName}" not found.`);
    return callback(`Breed "${breedName}" could not be found.`, null);
  }
  //if information is retrived return the 1st breed description value found at this indexed location from the breed key?
const description = data[0].description;
//if data is not empty
// data= the array from earlier
//1st element of array
//.desc is the accessed property of the 1st returned breed
callback(null, description);
});
}

//previous iteration of function

// if (process.argv.length < 3) {
//   console.error('Please provide a breed name as a command-line argument.');
//   process.exit(1);
// }
//   // Construct options object with the specified breed name
//   const options = {
//     url: `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
//     headers: {
//       'x-api-key': 'live_qzxRG3wrpUD155KtQFFw8NHiVMFjPKWkSG5KVbfoxMfPcRpr70pnd19oY9vNJYqY'
//     }
//   };

//   // Make the API request with the options object
//   request(options, (error, response, body) => {
//     if (error) {
//       //couldn't connect
//       console.error('Error: ', error);
//       if (response && response.statusCode !== 200) {
//         console.error(`Could not establish a connection. ${response.statusCode}`);
//       }
//     } else {
//       const data = JSON.parse(body);
//       // Check if it's an object
//       if (Array.isArray(data) && data.length === 0) {
//         //access the data array see if anything was returned
//         console.error(`No matching names were returned for your query: ${breedName}`);
//       } else {
//         //if something as returned matching query, then return info in data arr
//         const breedInfo = data[0];
//         console.log(`${breedInfo.name}:\n${breedInfo.description}`);
//         // Define and use the callback function here if needed
//         // cBFN(data[0].description);
//       }
//     }
//   });

  module.exports = fetchBreedDescription;