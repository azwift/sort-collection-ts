# sort-collection-ts

A collection of sorting algorithms implemented using Typescript. This was developed for educational purposes.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

* git clone https://github.com/azwift/sort-collection-ts.git
* npm install
* npm run-script build

The compiled js files will be created in the dist folder

## Running the tests

* mocha 

### example 

```
let collection = require("./dist/sortCollection");
collection = new collection.SortCollection();

const arrToSort = [{value:2},{value:4},{value:3};
const options = {
	order: "asc", 
	compare: function(a, b){
		if(a.value > b.value) return 1;
		if(a.value === b.value) return 0;
		else return -1;
	}
};
collection.quickSort.inPlace(arrToSort, options); // use rNew to return a new array without modifying the original

```
or import specific sort
```
let heapSort = require("./dist/heapSort");
heapSort = new heapSort.HeapSort();

const arrToSort = [2,4,3];
const options = {
	order: "asc"
};
collection.quickSort.inPlace(arrToSort, options); // use rNew to return a new array without modifying the original
```
## Built With

* [Typescript](https://www.typescriptlang.org/)
* [Gulp](https://gulpjs.com/)
* [gulp-typescript](https://www.npmjs.com/package/gulp-typescript)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



