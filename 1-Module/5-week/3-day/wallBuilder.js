/*
Write a recursive function that will take in a building material and an optional height.
The function will return how long it will take to build a medieval wall of that type and size.

The default height will be 8.

The builders will take 2 days to build 1 height of stone
	or 1 day to build 1 height of wood
The recursive part should console.log every day how many days they've been working on it

The final return should be an interpolated string that tells
	the total number of days it took to finish,
	If given a start day, then current day of the week it would be // (days array)
*/
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let buildAWall = (material, height = 8, ...rest) => {
	if (height === 0) return "were done" //todo finish the interpolated string as it should be
	if (!rest) rest = []

	if (material === "stone") {
		let lastIdx = rest[rest.length - 1]
		if (lastIdx && lastIdx.numDays) lastIdx.numDays += 1
		else {
			rest.push({numDays: 1})
		}
		console.log(`We've been working for ${rest[rest.length - 1].numDays}`)
		buildAWall(material, height -.5, ...rest)
	}
	else if (material === "wood") {
		let lastIdx = rest[rest.length - 1]
		if (lastIdx && lastIdx.numDays) lastIdx.numDays += 1
		else rest.push({numDays: 1})
		console.log(`We've been working for ${rest[rest.length - 1].numDays}`)
		buildAWall(material, height -1, ...rest)
	}
	else return "You didn't give the correct material"
}

console.log(buildAWall("stone", 10, {startDay: "M"}, {villagers: 30})) // 19 console.logs happen. 
// ^ Return string "We started on Monday, and ended on Saturday after 20 days."
console.log(buildAWall("wood"))
console.log(buildAWall("stone"))
console.log(buildAWall("wood", 9, {startDay: "F", vacations: false, daysOff: 1}))
