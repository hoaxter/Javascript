// func. defination
function nitin(){
    console.log("i am good");
}

nitin(); // func. calling

// Parameterized functions
function sunio(x, y){ // parameter
    return y;
} 
console.log("x",sunio(10, "nitin"), "y"); // argument

function mem(x, y){
    console.log(x);
    console.log(y); // we havent defined the value of so the js engine will give it a undefined value
    console.log(x+y); // it will give a NaN not a number
}
mem(10); 
console.log(typeof(NaN)); // it is a exception as it is retruning not a number when it is a number itself
console.log(0.1+0.2);// it will give 0.30000004 as it is a exception as js value dont handle decimal value that well

function lek(x=100, y=200){
    console.log(x);
    console.log(y);
    console.log(x+y);
}
lek();
lek(50);

let iso = {
    name: "nitin",
    age: "90",
    greet : function ay(){ // we can write the function name ay or not as we are only able to call a function in a object thorugh its key
        console.log("Its fine.");
        console.log(`its ${iso.name}`); // its not good to directly call a object in a object 
        console.log(`its ${this.name}`); // the keyword this points to the object in which it is present (for now) // we can use this instead of calling the object directly inside the object itself
    }
}
console.log(iso.name);
console.log(iso.greet); // it will give function defination
iso.greet();

