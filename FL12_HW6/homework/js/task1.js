let varA, varB, varC, varD;
const zero=0, num2=2, num4=4;
varA = prompt('Input variable A');
varB = prompt('Input variable B');
varC = prompt('Input variable C');
varA=varA?varA.trim():varA;
varB=varB?varB.trim():varB;
varC=varC?varC.trim():varC;
if(!varA||!varB||!varC){
	console.log('Invalid input data');
}else{
	varA=Number(varA);
	varB=Number(varB);
	varC=Number(varC);
	if(isNaN(varA)||isNaN(varB)||isNaN(varB)||!isFinite(varA)||!isFinite(varB)||!isFinite(varC)||varA === zero) {
		console.log('Invalid input data');
	}else{
		varD = varB * varB - num4 * varA * varC;			
		if (varD < zero) {
			console.log('no solution');
		} else if (varD === zero) {
			const varResult1 = -varB / (num2 * varA);
			console.log('x = ' + Math.round(varResult1));
		} else {
			const varResult1 = -(varB + Math.sqrt(varD)) / num2 * varA,
			varResult2 = -(varB - Math.sqrt(varD)) / (num2 * varA);
			console.log('x1 = ' + Math.round(varResult1) + ' and x2 = ' + Math.round(varResult2));
		}				
	}
}
