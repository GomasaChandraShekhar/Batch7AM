
// Functions

// 1. function

function fun001() {

    console.log('I am fun001');

}
//fun001();

// return type ---> 

function fun002() {


    console.log('Before return statement');
    return 'I am returning some value';
}

//let msg = fun002();
//console.log(msg);

// Anonymous function --- function without name

let msg = function () {
    //console.log('I am anonymous function');
    return 'I am returning some value';
}

// let msg2 = msg();
// console.log(msg2);

// Arrow function 

let sum = (x, y) => {
    console.log(x + y);
}
// sum(20, 40);

const sum1 = () => {
    console.log(10 + 20);
}
// sum1();

// Control statements

// if statement

function ifstmt(age) {
    console.log('Age is :: ', age);
    if (age >= 18) {
        console.log('I am more than 18 years old');
    }
    else {
        console.log('Your data is not availabe');
    }
    console.log('After if statement');
}
//ifstmt(20);

function ifelsestmt(age) {
    console.log('Age is :: ', age);
    if (typeof (age) == 'number' && age < 18) {
        console.log('You are not elegible for voting');
    }
    else if (typeof (age) == 'number' && age >= 18) {
        console.log('You are elegible for voting');
    }
    else {
        console.log('Your data is not availabe');
    }
    console.log('After if statement');
}

// ifelsestmt(20)

// switch case :: 

function switchCase(day) {

    switch (day) {
        case 'Monday':
            console.log('Monday');
            break;
        case 'Tuesday':
            console.log('Tuesday');
            break;
        case 'Wednesday':
            console.log('Wednesday');
            break;
        case 'Thursday':
            console.log('Thursday');
            break;
        case 'Friday':
            console.log('Friday');
            break;
        case 'Saturday':
            console.log('Saturday');
            break;
        case 'Sunday':
            console.log('Sunday');
            break;
        default:
            console.log('invalid day provided');

    }
    console.log('After switch statement');
}

//switchCase('Monday');



