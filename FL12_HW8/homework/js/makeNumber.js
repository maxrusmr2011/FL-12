function makeNumber (str) {
	const NUM0 = 0, SYMB0 = '0', SYMB9 = '9';
	let result = '';
	for (let i = NUM0; i < str.length; i++) {
		result += str[i] >= SYMB0 && str[i] <= SYMB9 ? str[i] : '';
	}
	return result;
}
void makeNumber('');
