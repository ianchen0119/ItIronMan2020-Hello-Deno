let a = function(i: number,j: number): number{
	return 3.5*i+(-6.6*j)
	}
function b(i: number,j: number) :number{
	return 6.6+(8.8*i)-3.5*j
	}
function MatrixC(i :number,j :number){
	let result = 0;
	for (var x = 1;x <= 60; x++) {
		let c = a(i,x)*b(x,j)
		result = result + c;
	}
	return result
}
export { a,b,MatrixC }