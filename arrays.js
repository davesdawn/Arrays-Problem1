//Write a JavaScript function that takes in two parameters, an array and a number (n), 
//and return the first n elements of that array.

// Write an array of names
let arrayOfNames = ["kofi", "Sarah", "Tyson", "Zyon", "Jordyn", "Ellis"];

// write a function with 2 parameters ie. an array and a number(n)
function findingArrayItems(arr, n) {
	
// write conditional statement to validate input and return corresponding output
	if (arr === null || n === null){
		return "invalid inputs, try again";
	} else if (n < 0){
		return "negative numbers not allowed";
	} else if (n > arr.length){
		return (`Number exceeds the ${arr.length} items listed`);

// use the .slice method to return the required items of the original array		
	} else {
		return arr.slice(0, n);
	}
};

console.log(findingArrayItems(arrayOfNames, 2));
/* ["kofi", "Sarah"] prints ie. "kofi" is index 0 and 2 the second parameter is 
the end which is not included in the shallow copy.*/
