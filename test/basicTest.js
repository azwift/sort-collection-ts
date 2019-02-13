const assert = require('assert');
let collection = require("./../dist/sortCollection");
collection = new collection.SortCollection();

/*Test Case*/
const objTestCase = {
	expected : [ { value: 1 },{ value: 2 }, { value: 3 }, { value: 4 }, { value: 9 },{ value: 10 },{ value: 15 },{ value: 22 },{ value: 30 },{ value: 32 },{ value: 39 },{ value: 40 },{ value: 41 } ],
	input : [{value:2},{value:4},{value:3},{value:1},{value:10},{value:22},{value:30},{value:40},{value:32},{value:15},{value:41},{value:39},{value:9}]
}; 
//compare callback function
const sortOptions = {
	compare: function(a, b){
		if(a.value > b.value) return 1;
		if(a.value === b.value) return 0;
		else return -1;
	}
};

describe(`basic test for all sort implementations in the sort collection`, function() {
	for(sort in collection){

	  describe(`${sort} an array of Objects`, function() {

	  	it('should return a sorted array of objects', function() {

				const output = collection[sort].rNew(objTestCase.input, sortOptions);
				const pass = isArrayEqual(objTestCase.expected, output, "value");
				
				assert.equal(pass, true);
	    });
		

		});
	}
});

/**
 * @description compares the values of two arrays and returns true if all elements of both arrays are equal
 * @param expected - expected results from a function
 * @param expected - actual results from a function 
 * @param prop - null if expected and actual input is not an array of objects,
 * otherwise represents the property name holding the values the function uses to compare two objects
 * @returns boolean
 */

function isArrayEqual(expected, actual, prop = null){
	
	if(!(expected instanceof Array) || !(actual instanceof Array))
		return false

	if(expected.length !== actual.length)
		return false;

	for(let i = 0; i < expected.length; i++){
		if(prop !== null){
			if(expected[i][prop] !== actual[i][prop])
				return false;

		}
	}

	return true;
}