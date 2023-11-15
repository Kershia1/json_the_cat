const request = require('request');
request('https://api.thecatapi.com/v1/breeds/search?q=sib', function (error, response, body) {
  const data = JSON.parse(body);
  let results = data[0];
  //console.log(results);//entire data array returned 
  //console.log('weight', results.weight);// works retrieve the parsed data array from the object to manipulate and acces the key.values.
  // console.log(data); //undefined
  // console.log(typeof data); //object
  // console.error('error; ', error);
  // console.log('statusCode: ', response && response.statusCode);
  // console.log('body : ', body);
  //console.log(typeof body); // returns vagrant [json_the_cat]> node breedfetcher.js
  //string

});

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