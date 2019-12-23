let varA, varB, varC;
const zero=0;
varA = prompt('Input length for triangle side A');
varB = prompt('Input length for triangle side B');
varC = prompt('Input length for triangle side C');
varA=varA?varA.trim():varA;
varB=varB?varB.trim():varB;
varC=varC?varC.trim():varC;
if(!varA||!varB||!varC){
	alert('input values should be ONLY numbers');
}else{
	varA=Number(varA);
	varB=Number(varB);
	varC=Number(varC);	
	if(isNaN(varA)||isNaN(varB)||isNaN(varC)||!isFinite(varA)||!isFinite(varB)||!isFinite(varC) ){
		alert('input values should be ONLY numbers');
	}else if(varA<=zero||varB<=zero||varC<=zero){
		alert('A triangle must have 3 sides with a positive definite length ');
	}else if(varA>=varB+varC||varB>=varA+varC||varC>=varB+varA){
		alert('Triangle doesn\'t exist');
	}else if (varA===varB&&varA===varC) {
		console.log('Equilateral triangle');
	}else if(varA===varB||varA===varC||varC===varB){
		console.log('Isosceles triangle');
	}else {
		console.log('Scalene triangle');
	}
	
}