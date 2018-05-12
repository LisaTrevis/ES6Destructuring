// ----- Destructuring ------

// Let's pretend we're building an object that represents a financial expense:
// var expense = {
// 	type: 'Business',
// 	amount: '$45 USD'
// };

// To reference these values at a future date, we'd need normally need to write:
// var type = expense.type;
// var amount = expense.amount;

// Refactored over to ES6:
// const { type } = expense;
// const { amount } = expense;
// The curly braces here do NOT represent an object, nor do they represent a duplicate key:value pair in the improved object literals
// When they curly braces are on the LEFT of the assignment operator, they mean "I want to declare a new var called type, and I want it to reference/be set equal to the expense.type property"


// However, this is still not DRY code, as we're repeating both const and expense. So let's condense this even more to:
// var expense = {
// 	type: 'Business',
// 	amount: '$45 USD'
// };

// const { type, amount } = expense;


// Let's look at another example in ES5 where we want to print out a summary of this object:
// var savedFile = {
// 	extension: 'jpg',
// 	name: 'repost',
// 	size: 14404
// }

// function fileSummary(file) {
// 	return `The file ${file.name}.${file.extension} is of size ${file.size}.`
// }

// Destructured with ES6:
// var savedFile = {
// 	extension: 'jpg',
// 	name: 'repost',
// 	size: 14404
// }

// function fileSummary({ name, extension, size }) {
// 	return `The file ${name}.${extension} is of size ${size}.`
// }

// fileSummary(savedFile) // returns "The file repost.jpg is of size 14404."


// If for some reason we wanted to add another argument, we could do so like this:
// var savedFile = {
// 	extension: 'jpg',
// 	name: 'repost',
// 	size: 14404
// }

// function fileSummary({ name, extension, size }, { color }) {
// 	return `The ${color} file ${name}.${extension} is of size ${size}.`
// }

// fileSummary(savedFile, { color: 'red' }) // returns "The red file repost.jpg is of size 14404."


// Destructuring arrays
// const companies = [
// 	'Google',
// 	'Facebook',
// 	'Uber'
// ];

// To destructure elements, we use square braces:
// const [ name, name2, name3 ] = companies

// To destructure properties, we use curly braces:
// const { length } = companies // length = 3


// Can also use the rest operator:
// const [ name, ...rest ] = companies
// name = 'Google'
// rest = [ 'Facebook', 'Uber']
// OR
// const [ ...rest ] = companies
// rest = [ 'Google', 'Facebook', 'Uber' ]


// Destructuring arrays & objects at the same time (not commonly used)
// const companies = [
// 	{ name: 'Google', location: 'Mountain View' },
// 	{ name: 'Facebook', location: 'Menlo Park' },
// 	{ name: 'Uber', location: 'San Francisco' },
// ];

// ES5: var location = companies[0].location
// Calling location returns 'Mountain View'

// ES6:
// const [{ location }] = companies;
// Calling location returns 'Mountain View'
// Goes from outside in, so [] pulls the first item (in this case an object) in the array, and then the word location grabs the value of the location property.


// const Google = {
// 	locations: [ 'Mountain View', 'London', 'New York' ]
// };

// const { locations } = Google;
// Calling locations returns the array

// const { locations: [ locations ] } = Google;
// Calling locations returns 'Mountain View'


// Let's say we want to have a function that saves a username and password to a database:

// function signup(username, password, email, dateOfBirth, city) {
// 	// create new user
// };

// signup('myname', 'mypassword', 'me@gmail.com', '6/13/1977', 'Alameda');
// This could throw an error if the arguments aren't entered in the correct order.

// Instead, let's create a user object,and pull the arguments from that, rendering the order unimportant:
// function signup({ username, password, email, dateOfBirth, city }) {

// }

// const user = {
// 	username: 'myname',
// 	password: 'mypassword',
// 	email: 'myemail@example.com',
// 	dateOfBirth: '6/13/1977',
// 	city: 'Alameda'
// }

// signup(user);


// WHY USE DESTRUCTURING OFF OF ARRAYS
// Example: transform an array of arrays as received from an API into an array of objects:

// const points = [
// 	[4, 5],
// 	[10, 1],
// 	[0, 40]	
// ];

// Map over the array, and for every element in the array, which is a pair of points, we're going to destructure off an x and a y value and then we're going to use the improved object literal syntax to return an object with x and y properties.
// points.map(pair => {
// 	const x = pair[0];
// 	const y = pair[1];
// });

// Destructured further:
// points.map(pair => {
// 	const [ x, y ] = pair;
// });

// Destructured even further:
// points.map(([ x, y ]) => {
// 	return { x: x, y: y };
// });

// One last destructure:
// points.map(([ x, y ]) => {
// 	return { x, y };
// });


// The snippet of code below duplicates references to 'profile' inside of the 'isEngineer' function. Perhaps we can reduce the amount of code used for referencng the 'title' and 'department' properties. Refactor this code to use destructuring. Can you get the body of the 'isEngineer' function down to a single line?

// const profile = {
//   title: 'Engineer',
//   department: 'Engineering'
// };

// function isEngineer(profile) {
//   var title = profile.title;
//   var department = profile.department;
//   return title === 'Engineer' && department === 'Engineering';
// }

// Initial destructure:
// function isEngineer(profile) {
//   const { title } = profile;
//   const { department } = profile;
//   return title === 'Engineer' && department === 'Engineering';
// }

// Second destructure:
// function isEngineer(profile) {
//   const { title, department } = profile;
//   return title === 'Engineer' && department === 'Engineering';
// }

// Solution in Q&A:
// const isEngineer = ({ title, department }) => title === 'Engineer' && department === 'Engineering';


// The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in. Convert this array of arrays into an array of objects, where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject'. Use array destructuring and the map helper.
// An array for a class has the form [subject, time, teacher]
// The resulting data structure should look something like the following:
// const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]

// const classes = [
//   [ 'Chemistry', '9AM', 'Mr. Darnick' ],
//   [ 'Physics', '10:15AM', 'Mrs. Lithun'],
//   [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
// ];

// const classesAsObject = classes.map(([ subject, time, teacher ]) => {
// 	return { subject, time, teacher };
// });


// RECURSION AND DESTRUCTURING
// Use array destructuring, recursion, and the rest/spread operators to create a function 'double' that will return a new array with all values inside of it multipled by two. Do NOT use array helpers (i.e. map, forEach or reduce).
// Example: input double([1, 2, 3]), output [2, 4, 6]

// const numbers = [1, 2, 3];

// To destructure the array, reference the first number in the array with number or num, then use the rest operator to grab the remaining items in the array, irregardless of the number of items in the array:
// const double = ([ num, ...rest ]) => {
	// If there is more than one item in the array, return the first item doubled, then apply the spread operator to the output of the function, which returns an array. If we don't spread the recursive double(rest), then we end up with nested arrays, i.e. [ 2, [ 4, [6] ] ]. Since we want [2, 4, 6], the spread operator is being used to merge the arrays.
	// [2, ...[4, ...[6] ] ] = [ 2, 4, 6 ]
    // if (rest.length > 0) return [num * 2, ...double(rest)];
    // If there's only one item in the array, return that item doubled in its own array:
//     return [num * 2];
// }