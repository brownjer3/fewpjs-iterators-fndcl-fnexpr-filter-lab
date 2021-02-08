function findMatching(array, target) {
    let matches = array.filter(element => {
        return element.toLowerCase() ===  target.toLowerCase()
    })
    return matches
}

function fuzzyMatch(array, target) {
    let matches = array.filter(element => {
        return element[0] === target[0]
    })
    return matches
}

function matchName(array, target) {
    let matches = array.filter(element => {
        return element.name === target
    })
    return matches
}