// Students score, total possible score
// 15/20 --> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59



//function
const studentScore = function(numScore) {
    let result = `${numScore}`;
    // conditions
    if(numScore >= 90 && numScore <= 100){
        return 'You got a A ' + result + '%'

    }else if(numScore >= 80 && numScore <= 89){
        return 'You got a B ' + result + '%'

    }else if(numScore >= 70 && numScore <= 79){
        return 'You got a C ' + result + '%'

    }else if(numScore >= 60 && numScore <= 69){
        return 'You got a D ' + result + '%'
    }else if(numScore >= 0 && numScore <= 59){
        return 'You got a F ' + result + '%'
    }
};

// display output
console.log(studentScore(76));
