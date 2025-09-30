// for each loop // its a method of array 
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){  // we give a callback function in foreach, callback function dont have a name 
    console.log(val);
} )

coding.forEach( (item) => {  // we can also do it arrow function
    console.log(item);
} )

function printMe(item){  // a simple function
    console.log(item);
}

coding.forEach(printMe)  // we can do this too

coding.forEach( (item, index, arr)=> {  // these are the other parameter of foreach item, index, arr(full array)
    console.log(item, index, arr);
} )


const myCoding = [ // a array containing objects
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }, 
    {
        languageName: "C++",
        languageFileName: "cpp" 
    },
    {
        languageName: "C",
        languageFileName: "c"
    },
    {
        languageName: "Golang",
        languageFileName: "go"
    },
    {
        languageName: "Assembly",
        languageFileName: "asm"
    }
    
]

myCoding.forEach( (item) => { // we can iterate the array using foreach
    console.log(item.languageName); // accessing the value of a key of the object
} )

