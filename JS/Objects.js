
// Object literal

const student = {
    'name': 'Chandra',
    'age': 40,
    'country': 'India',
    'state': 'Telangana',

}

// for.....in loop
// for (const key in student) {
//     // console.log(key + "  :  " + student[key]); // names of the keys will be returned.
//     console.log(student[key]);
// }

// Using new keyword

function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

// const person1 = new Person('Shekhar', 30, 'Hyderabad');
// const person2 = new Person('Chandra', 32, 'Warangal');


// for (const key in person1) {
//     const element = person1[key];
//     console.log(element);

// }

// for (const key in person2) {
//     const element = person2[key];
//     console.log(element);

// }



// Object Desctructuring  {}
function fun01() {

    const student1 = {
        'sname': 'Chandra',
        'sage': 40,
        'scountry': 'India'
    } // 20

    const { sname, sage, scountry } = student1; //10

    console.log(sname.toLowerCase()); //50
    console.log(sage);
    console.log(scountry);
    console.table(student1);

}

fun01();

// Template literals


function studentData(sName, sCountry) {

        console.log(sName+'   '+sCountry);

        console.log(`${sName}      ${sCountry}`);

    console.table(`${sName} is living in ${sCountry}`);

    console.log(typeof(sName));
    console.log(typeof(sCountry));

}

// studentData(`Chandra`, 'India');





