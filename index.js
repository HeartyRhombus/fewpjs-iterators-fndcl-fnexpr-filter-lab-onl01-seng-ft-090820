const findMatching = (drivers, string) => drivers.filter( d => d.toLowerCase() === string.toLowerCase())


function fuzzyMatch(drivers, string) {
    return drivers.filter( d => {
        return d.toLowerCase().indexOf(string.toLowerCase()) === 0
    })

}

function matchName(drivers, string) {
    return drivers.filter( d => {
        return d.name === string
    })
}