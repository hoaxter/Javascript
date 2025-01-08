// #Declaration
// var          let           const
// ok           no             no             redeclaration 
// ok           ok             no             reassing


// Pointer 

// 1. The shortest javascript code is Empty javascript file

// 2.  whenever a javascript code runs a global execution context (gec) is created. Inside that gec we have to phases:
// -> Memory Creation Phase (MCP).
// -> Code Execution Phase  (CEP).

// 3. MCP runs when 0 line code is executes that is before the CEP, the role of MCP is to allocate memory:
// -> To all the variables.
// -> To all the functions.

// 4. The role of CEP is to execute after MCP and to run the code line by line.

// 5. All the javascript code is getting executed becasue of callstack, GEC is actually running inside the callstack.

// 6. Whenever any function is execute a new execution context is created and the name of the newly created execution context is same as that of name of function.

//*7. Whenevr GEC is created along with that global object (window) is also created. 
