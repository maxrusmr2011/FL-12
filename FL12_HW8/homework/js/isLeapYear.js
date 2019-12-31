function isLeapYear (date) {
	let year, result = 'Invalid Date';
	if (typeof(date) === 'number'||typeof(date) === 'string') {
		year=(new Date(date)).getFullYear();
	}
	if (year) {
		if (year%4 === 0 && year%100 !== 0 || year%400 === 0) {
			result = `${year} is a leap year`;
		} else {
			result = `${year} is not a leap year`;
		}
	}
	return result;
}
void isLeapYear();
