let varA, varB, varC;
const zero=0, num2=2;
varA = prompt('Input length for triangle side A');
varB = prompt('Input length for triangle side B');
varC = prompt('Input length for triangle side C');
if(!varA||!varB||!varC||isNaN(Number(varA))||isNaN(Number(varB))||isNaN(Number(varC)) ){
	alert('input values should be ONLY numbers');
}else{
	varA=Number(varA);
	varB=Number(varB);
	varC=Number(varC);
	if(varA<=zero||varB<=zero||varC<=zero){
		alert('A triangle must have 3 sides with a positive definite length ');
	}else{
		if(varA>=varB+varC||varB>=varA+varC||varC>=varB+varA){
			alert('Triangle doesn\'t exist');
		}else{
			if (varA===varB&&varA===varC) {
				console.log('Equilateral triangle');
			} else if(varA===varB||varA===varC||varC===varB){
				console.log('Isosceles triangle');
			} else {
				console.log('Scalene triangle');
			}
		}
	}
}
