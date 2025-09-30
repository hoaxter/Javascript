// for in loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {   // loop for object
    console.log(`${key} shortcut is for ${myObject[key]}`);  // ${key} , ${myObject[key]} for value
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {  // for in also work in array but it will only prints its keys
    console.log(key, programming[key]); // so it print its values we have to write like this
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {  // map is not iteratable through this for in loop but it will not throw error like object because it is an object so it will run but will not give any output
    console.log(key);
}