const subtract = (a,b) => {
    if(a-b > 0){
    return a-b
    } else {
        return('Error: Difference must be a positive number.')
    }
}
module.exports = subtract