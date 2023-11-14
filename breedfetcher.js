const request = require('request');

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

//fetch breed information from the catsAPI

//create the callback to implement this. 