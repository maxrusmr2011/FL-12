function countNumbers (str) {
	let NUM0 = 0, NUM1 = 1, objReturn = {}; 
	str = makeNumber(str);
	for (let i = NUM0; i < str.length; i++) {
		objReturn[str[i]] = (objReturn[str[i]] || NUM0) + NUM1;
	}
	return objReturn;
}
function makeNumber (str) {
	let NUM0 = 0, SYMB0 = '0', SYMB9 = '9', strReturn = '';
	for (let i = NUM0; i < str.length; i++) {
		strReturn += ( str[i] >= SYMB0 && str[i] <= SYMB9 ? str[i] : '' );
	}
	return strReturn;
}
void countNumbers('');