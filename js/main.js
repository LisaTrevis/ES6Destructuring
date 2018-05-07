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


// Let's look at another example in ES5 where we want to print out a summar of this object:
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
// const [ ...rest ] = companies
// rest = [ 'Google', Facebook', 'Uber' ]


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

function signup(username, password, email, dateOfBirth, city) {
	// create new user
};

signup('myname', 'mypassword', 'me@gmail.com', '6/13/1977', 'Alameda');











