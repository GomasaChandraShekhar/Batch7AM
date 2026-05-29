
function test1(var1, var2){

if(var1 && var2){
    console.log(true);
}
else{
    console.log(false);
}

}

// test1(false, false); // false
// test1(true, false); // false
// test1(false, true); // false
// test1(true, true); // true

function test2(var1, var2){
if(var1 || var2){
    console.log(true);
}
else{
    console.log(false);
}
}

// test2(true, true); // true
// test2(true, false); // true
// test2(false, true); // true
// test2(false, false); // false

function test3(){
console.log(!false);
}

test3();