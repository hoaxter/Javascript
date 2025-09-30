// reduce method 
// It is used to reduce the array to a single value
// it takes two parameters , first is a callback function and second is initial value
// callback function also takes two parameters , first is accumulator and second is current value
// accumulator is used to store the sum of all values and current value is used to hold the current value of array
// initial value is used to set the starting value of accumulator
// if we don't provide initial value then accumulator will be set to the first value of array and current value will be set to the second value of array
// if we provide initial value then accumulator will be set to the initial value and current value will be set to the first value of array
// reduce method returns a single value which is the result of the reduction
// reduce method does not change the original array

const myNums = [1, 2, 3]    

const myTotal1 = myNums.reduce(function (acc, currval) {  // we are using reduce method which have two parameters accumulator and current value , current value hold the current value of array
    console.log(`acc: ${acc} and currval: ${currval}`);  // acc. is used to store the sum of acc. + current value and acc. first value is assinged through initial value that we give },0 like this 
    return acc +  currval   // returning acc+current value to accumulator until the loop ends, and in above line we are printing the acc. and curr value 
}, 0) // here is the initial value
console.log(myTotal1);

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0) // same as above using arrow function but here we are not priniting acc. and currval 
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0) // adding price of all items in the shopping cart array 
console.log(priceToPay);