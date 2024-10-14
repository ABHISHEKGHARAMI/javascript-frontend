/* 

Comparing the simple and advanced function.

*/

const fun1 = function(){
    const t1 = new Date();
    console.log(`Greeting from the regular function.`);
    const t2 = new Date();
    const exc = t2.getTime() - t1.getTime();
    console.log(`Execution time : ${exc}`);    
}

const fun2 = ()=>{
    const t1 = new Date();
    console.log(`Greeting from the arrow function.`);
    const t2 = new Date();
    const exc = t2.getTime() - t1.getTime();
    console.log(`Execution time : ${exc}`);
}

fun1();
fun2();

