// Code your solution here
function findMatching(drivers, match) {
    return drivers.filter(driver => driver.toLowerCase() === match.toLowerCase())
}
function fuzzyMatch(drivers, match) {
    return drivers.filter(driver => driver[0] === match[0])
}
function matchName(drivers, match) {
    return drivers.filter(driver => driver.name === match)
}
