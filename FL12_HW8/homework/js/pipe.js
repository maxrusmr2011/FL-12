function pipe (num) {
	const START = 1;
	for (let i = START; i < arguments.length; i++) {
		num = arguments[i](num);
	}
	return num;
}
void pipe(); 