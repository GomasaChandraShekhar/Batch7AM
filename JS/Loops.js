function test1() {
    // 1 --- 100,000;

    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
//test1();

function test2() {
    let a = 1;
    while (a <= 5) {
        console.log(a);
        a++;
    }
}
//test2();

function test3() {
    let a = 1;
    do {
        console.log(a);
        a++;
    }
    while (a <= 5);
}
//test3();

function test4() {
    let sname = 'Gomasa';
    for (const char of sname) {
        console.log(char);
    }
}
//test4();


function test5(name, age) {

    return name;
}

let sname = test5('Chandra', 30);
console.log(sname);

const sum = (x, y) => {
    console.log(x + y);
}
//sum(20, 40);

const sum1 = (d) => {
    console.log(10 + 20);
}
//sum1(40);



