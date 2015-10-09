
//Set up the drawing environment here
var margin = {t:20,r:20,b:20,l:20};
var width = document.getElementById('plot').clientWidth-margin.l-margin.r,
	height = document.getElementById('plot').clientHeight-margin.t-margin.b;

var plot = d3.select('.canvas')
	.append('svg')
	.attr('width',width+margin.l+margin.r)
	.attr('height',height+margin.t+margin.b)
	.append('g')
	.attr('class','plot')
	.attr('transform', 'translate('+margin.r + ','+margin.l +')');


//Start with 100 symbols
var numOfSymbols = 100;

//Create an array, generate objects to push into the array
//Attributes of these symbols are
// --> x position: between 0 and width
// --> y position: betewen 0 and height
// --> size: between 0 and 100x100
// --> type: circle or square
// --> color
var symbols = [];

for (var i =0; i<numOfSymbols; i++) {
	thisObject = {
		shapeX: Math.random()*(width-2*margin.r),
		shapeY: Math.random()*(width-2*margin.b),
		shapeLength: Math.random()*(100),
		shapeType: Math.round(Math.random()),
		shapeR: Math.round(Math.random()*(255)),
		shapeG: Math.round(Math.random()*(255)),
		shapeB: Math.round(Math.random()*(255)),
	};
	symbols.push(thisObject);
}

console.log(symbols[0]);
console.log(symbols[1]);

//With the array you've created and populated, draw circles to represent these symbols
symbols.forEach(function(index){
	if (index.shapeType == 0) {
		plot
		.append('circle')
		.attr('cx', index.shapeX)
		.attr('cy', index.shapeY)
		.attr('r', index.shapeLength)
		.style('fill','rgb('+index.shapeR+','+index.shapeG+','+index.shapeB+')');

	} else {
		plot
		.append('rect')
		.attr('x', index.shapeX - (index.shapeLength/2))
		.attr('y', index.shapeY - (index.shapeLength/2))
		.attr('width', index.shapeLength)
		.attr('height', index.shapeLength)
		.style('fill','rgb('+index.shapeR+','+index.shapeG+','+index.shapeB+')');
	}

})
