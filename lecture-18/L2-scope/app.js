// Scope 
// Types of Scope
// 1. Global,   2. Script
// 3. Function, 4. Block

// Case1: kya apka var {} ke andar hai
// -> Not => so it scope will be global or script
//    -> case1.1 => which declarative is used 
//        -> Var => global
//        -> let/const => script
// -> Yes => block, function, global
//    -> case2.1 => {} function ki vajah se hai
//       -> No => var -> global , let/const -> block
//       -> Yes => var -> functional, let/const -> block

var a = 10; // global 
let b = 20; // script
const c = 30; // script

if(true){
    var d = 100; // global
    let e = 200; // block
    const f = 300; // block
}

function sam(){
    var g = 1000; // function 
    let h = 2000; // block
    const i = 3000; // block
}

sam();