let temp = 65;

// logical and operator should work 2 conditions

if(temp >= 60 && temp <= 90){
    console.log('it is pretty nice out');
}

// logical and , but can work 1 from two conditions
if(temp >= 0 || temp >= 120){
    console.log('Do not go outside');
}

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if(isGuestOneVegan && isGuestTwoVegan) {
    console.log('only vegan')
    } else if(isGuestOneVegan || isGuestTwoVegan){
        console.log('vegan options')
    } else{
        console.log('anything')
    }