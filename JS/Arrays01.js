
let sname = 'Chandra';

let num = 10;

const country = 'India';

/**
 * 
 * name, 
 * age
 * rollno
 * ssnNo
 * address
 * 
 * 10, 20, 30 
 * 
 */

// let arrayname = [val1, val2, val3, val4,.........];

const arr1 = [10, 20, 30, 40];
// console.log(arr1);
// console.log('length of arr1 array is :: ', arr1.length);
// console.log('arr1.indexOf(10)   ', arr1.indexOf(10));
// console.log('arr1.indexOf(40)   ', arr1.indexOf(40));


// Creating array using Array literal --- square bracket --- []

function test1() {
    const arr1 = [10, 20, 30, 40];
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);
    }
}
// test1();


// Using new keyword

function test2() {
    const arr = new Array();
    // console.log(arr.length);
    // console.log(arr[0]);// undefined

    arr[0] = `Chandra`;
    arr[1] = `Bikash`;
    arr[2] = `Priya`;
    arr[3] = 10;

    // console.log(arr.length); // 3
    // console.log(arr[0]);// Chandra

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

}
// test2();

// Using Array Constructor

function test3() {
    const arr3 = new Array(`Shekhar`, `Seema`, `Sara`, `Likhita`, `Bikash`, 'Priya', 30, true);

    // for loop
    for (let i = 0; i < arr3.length; i++) {
        console.log(arr3[i]);
    }

    arr3[8] = 'India';

    for (const ele of arr3) {
        console.log(ele);
    }
}
// test3();


// Array methods

function test4() {
    let ele;
    const arr4 = [10, 5, 25, 20, 15];
    const arr5 = [`anil`, `chandra`, true, false];
    // console.log(arr4);

    // console.log(arr4.at(0));
    // const arr6 = arr4.concat(arr5);
    // console.log(arr6);
    // console.log(arr4.push(30));
    // let ele = arr4.pop();
    // ele = arr4.shift();
    // console.log(ele);

    // const myArray = new Array(5).fill(0);
    // console.log(myArray);

    // console.log(arr4.includes(40));
    // console.log(arr4.indexOf(39));

    // console.log(Array.isArray(arr5));
    // ele = arr4.join(); // 10,15,20,25 -- string
    // console.log(ele);
    // console.log(typeof (ele));

    // console.log(arr4);
    // const colors = ['red', 'blue', 'green', 'blue', 'yellow', 'blue'];
    // console.log(colors.indexOf('blue'));// 1
    // console.log(colors.lastIndexOf('blue'));// 5

    // let num = () => {
    //     console.log(5 * 2);
    // }
    // num();

    // const arr6 = arr4.map(num => num * 2);
    // console.log(arr6);


    // sort -- sort in alphabetical order
    const myFruits = ["Apple", "Date", "Cherry", "Banana"];
    // console.log(myFruits.sort());

    // slice - useded to get a portion of the array
    // slice(startIndex, numberofelements);
    // const result = myFruits.slice(0, 3);
    // console.log(result);

    // splice - remove the elements of an array
    // let removedElement = myFruits.splice(2, 1);
    // console.log(myFruits);
    // console.log(removedElement);

    // unshift - insert elements at the beginning
    myFruits.unshift("cherry", "apple");
    console.log(myFruits);


}

// test4();

//  Destructuring []

const colors = ['Red', 'Green', 'Orange'];
// console.table(colors);

// const [a, b, c] = colors;

const [first, second, third] = colors;

// console.log(first);
// console.log(second);
// console.log(third);

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];
console.table(weekDays);

const [day1, day2, ...rest] = weekDays;

console.log(day1);
console.log(day2);

console.table(rest);

console.log(weekDays);








