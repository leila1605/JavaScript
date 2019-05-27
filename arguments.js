// Multiple arguments

let add = function(a, b, c){
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)


//Default arguments
let getScroreText = function(name = 'Anonymous', score = 0){
    return 'Name: ' + name + ' Score: ' + score
}

let scoreText = getScroreText(undefined, 99)
console.log(scoreText)

// Challenge
// A 25% tip on $40 would be $10

let tipPercent = function(total, tipPercent = .2){
    let percent = tipPercent * 100
    return `A ${percent}%`tip on $${total} would be $$ {tip}
}

let tip = getTip(40, .25)
console.log(tip)






