function convert (...arg) {
	const NUM0 = 0, STR_NUMBER = 'number';
	let result = [];
	for(let i = NUM0; i < arg.length; i++) {
		result.push(typeof arg[i] === STR_NUMBER ? `${arg[i]}` : +arg[i] );
	}
	return result;
}
convert();
function executeforEach (arr, func) {
	const NUM0 = 0;
	for(let i = NUM0; i < arr.length; i++) {
		func(arr[i]);
	}
}
executeforEach([]);
function mapArray (arr, func) {
	const NUM0 = 0;
	let result = [];
	executeforEach(arr, item => {
 result.push(+item) 
} );
	for(let i = NUM0; i < result.length; i++) {
		result[i] = func(result[i]);
	}
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
	const NUM0 = 0;
	let result = '';
	for(let i = str.length; i > NUM0 ;) {
		result += str[--i];
	}
	return result;
}
flipOver('');
function makeListFromRange (arrRange) {
	const NUM0 = 0, NUM1 = 1;
	let result = [];
	for(let i = arrRange[NUM0]; i <= arrRange[NUM1]; i++) {
		result.push(i);
	}
	return result;
}
makeListFromRange([0,0]);
function getArrayOfKeys (arr, keyObj) {
	const NUM0 = 0;
	let result = [];
	for(let i = NUM0; i < arr.length; i++) {
		result.push(arr[i][keyObj]);
	}	
	return result;
}
getArrayOfKeys([]);
function substitute (arr) {
	const NUM30 = 30, STR_ASTERISK = '*';
	return mapArray(arr, item => item < NUM30 ? STR_ASTERISK : item );
}
substitute([]);
function getPastDay (date, daysAgo) {
	const newDate = new Date(date.getFullYear(), date.getMonth(),
				date.getDate() - daysAgo);
	return newDate.getDate();
}
getPastDay(new Date());
function formatDate (date) {
	const NUM1 = 1, NUM10 = 10, STR_ = '', STR0 = '0';
	return `${date.getFullYear()}/${date.getMonth() + NUM1}/${date.getDate()} `+
				`${date.getHours() < NUM10 ? STR0 : STR_ }${date.getHours()}:`+
				`${date.getMinutes() < NUM10 ? STR0 : STR_ }${date.getMinutes()}`;

}
formatDate(new Date());
