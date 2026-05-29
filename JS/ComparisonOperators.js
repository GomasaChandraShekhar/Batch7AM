
function test1() {
    let a = 10;
    let b = 20;
    console.log('a == a :: ', a == a); // true
    console.log('a == b :: ', a == b); // false

    console.log('a != b :: ', a != b); // true
    console.log('a != a :: ', a != a); // false

    console.log('a > b :: ', a > b); // false
    console.log('a < b :: ', a < b); // true

    console.log('a >= b :: ', a >= b); // false
    console.log('a >= a :: ', a >= a); // true

    console.log('a <= b :: ', a <= b); // true
    console.log('b <= a :: ', b <= a); // false

    console.log('a === b :: ', a === b); // false
    console.log('a === a :: ', a === a); // true
    console.log(typeof (a));
    console.log(typeof (b));

    console.log('a !== b :: ', a !== b); // true
    console.log('a !== a :: ', a !== a); // false

    console.log(a !== 's'); // true

}
//test1();

function test2(age) {
    const message = age >= 18 ? 'Adult' : 'Minor';
    console.log(message);
}
test2(15);









