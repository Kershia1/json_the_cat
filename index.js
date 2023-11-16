const fetchBreedDescription = require('./breedfetcher');

//access the breedname in url search
const breedName = process.argv[2];

if (!breedName) {
  //if this name dosen't match a breed in the JSON obj
  console.error('Please provide the breed name as a CLI arg.');
  //exit to prevent an infinite loop
  process.exit(1);
}
fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.error('Error while fetching details: ', error);
  } else {
    console.log(description);
  }
});