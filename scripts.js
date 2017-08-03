function getTriangleArea(a, h) {
	if ((a > 0) && (h > 0)) {
	} else {
		console.log ("Nieprawidłowe dane");
	}

	var result = a * h / 2;
	return result;
}

console.log( getTriangleArea(10, 6) );

var triangle1Area = getTriangleArea(20, 8);
var triangle2Area = getTriangleArea(2, 4);
var triangle3Area = getTriangleArea(10, 7);
	