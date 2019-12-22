let varA, varB, varC, varD;
const zero=0, num2=2, num4=4;
varA = Number( prompt('Input variable A') );
varB = Number( prompt('Input variable B') );
varC = Number( prompt('Input variable C') );
if(isNaN(varA)||isNaN(varB)||isNaN(varB)||varA === zero) {
	console.log('Invalid input data');
}else{
	varD = varB * varB - num4 * varA * varC;			
	if (varD < zero) {
		console.log('no solution (Discriminant < 0)');
	} else if (varD === zero) {
		const varResult1 = -varB / (num2 * varA);
		console.log('x = ' + Math.round(varResult1));
	} else {
		const varResult1 = -(varB + Math.sqrt(varD)) / num2 * varA,
		varResult2 = -(varB - Math.sqrt(varD)) / (num2 * varA);
		console.log('x1 = ' + Math.round(varResult1) + ' and x2 = ' + Math.round(varResult2));
	}				
}

