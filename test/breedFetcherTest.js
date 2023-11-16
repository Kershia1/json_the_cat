// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedfetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  //callback is (done)
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns returns a null error when a invalid breed is passed, via callback', (done) => {
    fetchBreedDescription('invalid/non-existent breed name', (err, desc) => {
      //error is expected
      //nothing shoudl be returned in the data.length resulting in an error
      assert.notEqual(err, null);
      //nothing should be returned in the description
      assert.equal(desc, null);

      done();
    });
  });
});

/*
 * Add another test (it) here which should test the scenario where an invalid/non-existent breed is passed in.

In this scenario, we expect the first argument for our callback (err) to beset,and desc to be null.
 */