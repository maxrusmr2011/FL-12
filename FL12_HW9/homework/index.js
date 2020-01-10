function convert () {
	const INDEX0 = 0, STR_NUMBER = 'number';
	let result = [];
	for (let i = INDEX0; i < arguments.length; i++) {
		result.push(typeof arguments[i] === STR_NUMBER
				? `${arguments[i]}` : parseInt(arguments[i]) );
	}
	return result;
}
convert();
function executeforEach (arr, func) {
	const INDEX0 = 0;
	for (let i = INDEX0; i < arr.length; i++) {
		func(arr[i]);
	}
}
executeforEach([]);
function mapArray (arr, func) {
	let result = [];
	executeforEach(arr, item => {
			result.push(func(parseInt(item) ) ) 
} );
	return result;
}
mapArray([]);
function filterArray (arr, func) {
	let result = [];
	executeforEach(arr, item => {
				if (func(item) ) {
					result.push(item);
				}
			} );
	return result;
}
filterArray([]);
function flipOver (str) {
	const INDEX0 = 0;
	let result = '';
	for (let i = str.length; i > INDEX0 ;) {
		result += str[--i];
	}
	return result;
}
flipOver('');
function makeListFromRange (arr) {
	const INDEX0 = 0, INDEX1 = 1;
	let result = [];
	for (let i = arr[INDEX0]; i <= arr[INDEX1]; i++) {
		result.push(i);
	}
	return result;
}
makeListFromRange([0,0]);
function getArrayOfKeys (arr, keyObj) {
	const INDEX0 = 0;
	let result = [];
	for (let i = INDEX0; i < arr.length; i++) {
		result.push(arr[i][keyObj]);
	}	
	return result;
}
getArrayOfKeys([]);
function substitute (arr) {
	const NUM_LOW = 30, STR_REPLACE = '*';
	return mapArray(arr, item => item < NUM_LOW ? STR_REPLACE : item );
}
substitute([]);
function getPastDay (date, daysAgo) {
	const newDate = new Date(date.getFullYear(), date.getMonth(),
				date.getDate() - daysAgo);
	return newDate.getDate();
}
getPastDay(new Date());
function formatDate (date) {
	const ADD_MONTH = 1, NUM_LOW = 10, STR_EMPTY = '', STR0 = '0';
	return `${date.getFullYear()}/${date.getMonth() + ADD_MONTH}/${date.getDate()} `+
				`${date.getHours() < NUM_LOW ? STR0 : STR_EMPTY }${date.getHours()}:`+
				`${date.getMinutes() < NUM_LOW ? STR0 : STR_EMPTY }${date.getMinutes()}`;
}
formatDate(new Date());
