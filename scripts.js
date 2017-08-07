function getTriangleArea(a, h) {
	if ((a > 0) && (h > 0)) {
		var result = a * h / 2;
		return result;
	} else {
		console.log ("Incorrect Data");
	}
}

console.log( getTriangleArea(10, 6) );

var triangle1Area = getTriangleArea(20, 8);
var triangle2Area = getTriangleArea(2, 4);
var triangle3Area = getTriangleArea(10, 7);
	