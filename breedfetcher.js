
const request = require('request');

//handeling and returning fetched data requeted by the user in the CLI Via Index.js

  // Construct options object with the specified breed name
  const options = {
    url: `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    headers: {
      'x-api-key': 'live_qzxRG3wrpUD155KtQFFw8NHiVMFjPKWkSG5KVbfoxMfPcRpr70pnd19oY9vNJYqY'
    }
  };

  // Make the API request with the options object
  request(options, (error, response, body) => {
    if (error) {
      //couldn't connect
      console.error('Error: ', error);
      if (response && response.statusCode !== 200) {
        console.error(`Could not establish a connection. ${response.statusCode}`);
      }
    } else {
      const data = JSON.parse(body);
      // Check if it's an object
      if (Array.isArray(data) && data.length === 0) {
        //access the data array see if anything was returned
        console.error(`No matching names were returned for your query: ${breedName}`);
      } else {
        //if something as returned matching query, then return info in data arr
        const breedInfo = data[0];
        console.log(`${breedInfo.name}:\n${breedInfo.description}`);
        // Define and use the callback function here if needed
        // cBFN(data[0].description);
      }
    }
  });


//Keeping previous attempts to understand my learning process. 

/*const request = require('request');

// Check if the user provided a breed name as a command-line argument
if (process.argv.length < 3) {
  console.error('Please provide a breed name as a command-line argument.');
  process.exit(1);
}

const breedName = process.argv[2];

// Construct the API request URL with the specified breed name
const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${encodeURIComponent(breedName)}`;

// Make the API request
request(apiUrl, function (error, response, body) {
  if (error) {
    console.error('Error:', error);
    return;
  }

  const data = JSON.parse(body);

  // Check if the breed was found
  if (data.length === 0) {
    console.error(`Breed "${breedName}" not found.`);
    return;
  }

});

//passing a specific breed (key), to return breed (values)
//eed to use the options obj specifically to make a custom header
const options = {
    url: `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    headers: 
    {
  'x-api-key':'live_qzxRG3wrpUD155KtQFFw8NHiVMFjPKWkSG5KVbfoxMfPcRpr70pnd19oY9vNJYqY'
    }
  };

request(options, (error, response, body), cBFN => {
  if (error) {
    console.error('Error: ', error);
    if (response && response.statusCode !== 200) {
      return cBFN(`Could not establish a connection. ${response.statusCode}`);
    }
  } else {
    const data = JSON.parse(body);
    // Check if it's an object
    if (Array.isArray(data) && data.length === 0) {
      return cBFN(`No matching names were returned for your query: ${breed}`);
    } else {
        const breedInfo = data[0];
        console.log(`${breedInfo.name}:\n${breedInfo.description}`);
        cBFN(data[0].description);
    }
  }
}); */

/*
  const data = JSON.parse(body);
  let results = data;
  console.log('Breed Name: ', results.name);
});
// returning
// Breed Name:  Siberian
// Breed Name:  Abyssinian


/*
Implementing in Node
Instruction
Write the logic in breedFetcher.js to fetch the Siberian data from the API endpoint using request.

Work incrementally. For example, to start off, print out the body content to the terminal. The body is the entire response body sent back from the API server.

Take a moment to also check what the type of the body is:

console.log(typeof body)
We find that it's actually a string type.

In order to scan this data like a JavaScript object, we need to convert the string version of it into an object first. As discussed in the JSON Reading earlier, this is called deserialization and we can do this by "parsing" the string.

Instruction
Let's use JSON.parse to convert the JSON string into an actual object.

const data = JSON.parse(body);
console.log(data);
console.log(typeof data);
The output indeed looks a bit more structured, and typeof would now tell us that data is an object.

Instruction
Access the first entry in the data array and print out the description for the user.

*/

//implement the breed fetcher API 

//specfiy the endpoint for the /get/breeds/search request 
//for siberian cat https://api.thecatapi.com/v1/breeds/search?q=sib

// 1)
//fetch breed information from the catsAPI



//2)
//create the callback to implement this. 


//to check what data is being returned in the body of the request.

// the stringifyed return then is converted to a JSON File 
// const data = JSON.parse(body);
// console.log(data);
// console.log(typeof data);

//3
//Access the first entry in the data array and print out the description for the user.


  // Display information about the breed
//   const breedInfo = data[0];
//   console.log(`${breedInfo.name}:\n${breedInfo.description}`);
// });
// request('https://api.thecatapi.com/v1/breeds/search?q=sib', function (error, response, body) {
//   const data = JSON.parse(body);
//   let results = data[0];
//   console.log('Breed Name: ', results.name); // only returns siberian. 
  //console.log(results);//entire data array returned 
  //console.log('weight', results.weight);// works retrieve the parsed data array from the object to manipulate and acces the key.values.
  // console.log(data); //undefined
  // console.log(typeof data); //object
  // console.error('error; ', error);
  // console.log('statusCode: ', response && response.statusCode);
  // console.log('body : ', body);
  //console.log(typeof body); // returns vagrant [json_the_cat]> node breedfetcher.js
  //string
  