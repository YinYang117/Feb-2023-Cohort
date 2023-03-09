/*
Write a recursive function that will takes in:
	An optional building material 
	and
	An optional height.
		The default material will be wood
		The default height will be 8.

	The builders take 1 day to build 1 height of wood
		or 
	2 days to build 1 height of stone

The recursive part should console.log the current height until it meets the goal
*/

// make a base case when Something? gets to the height were looking for
// check material
// if wood
// "go up" by 1 
// else stone
// "go up" by .5

debugger
let buildAWall = (material = "wood", height = 8, currHeight = 0) => {
	debugger
	if (currHeight === height) return console.log(`The current height is ${currHeight}`)
	if (material === "wood") {
		console.log(`The current height is ${currHeight}`)
		buildAWall(material, height, currHeight + 1)
	}

	else if (material === "stone") {
		console.log(`The current height is ${currHeight}`)
		buildAWall(material, height, currHeight + 0.5)
	}
}

// buildAWall("stone"))
// buildAWall("stone", 10)
// buildAWall("wood")
// buildAWall(6, "bananana") // wont work
buildAWall()
