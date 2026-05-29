

let sname = 'Chandra';

let num = 10;

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
    let arr = new Array();
    // console.log(arr.length);
    // console.log(arr[0]);// undefined

    arr[0] = `Chandra`
    arr[1] = `Bikash`
    arr[2] = `Priya`

    // console.log(arr.length); // 3
    // console.log(arr[0]);// Chandra

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }

}
// test2();

// Using Array Constructor

function test3() {
    const arr3 = new Array(`Shekhar`, `Seema`, `Sara`, `Likhita`, `Bikash`, 'Priya');
    for (const sname of arr3) {
        console.log(sname);
    }

    arr3[0] = `Hyderabad`;

    for (const sname of arr3) {
        console.log(sname);
    }
}
// test3();

function test4() {
    let arr4 = [10, 15, 20, 25, 30, 35, 40, 45, 50,
        `anil`, `chandra`, true, false];
    console.log(arr4);

    // console.log(arr4.push(55)); // 
    // console.log(arr4.pop()); // 
    // console.log(arr4.reverse());
    // console.log(arr4.shift());

    // console.log(arr4);

}

// test4();