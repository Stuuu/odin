var store = [0];
var evenStore = [];

// for loop to populate store Array with Fibonacci sequence limited by last value < 4 mill
for(var f=1; f < 4000000; f+= store[store.length-2]) {

 store.push(f);

};

// for loop that itterates over store array pushing any even values to new arry titled evenStore
for (var i = 0; i < store.length; ++i) {
    if ((store[i] % 2) === 0) {
        evenStore.push(store[i]);
    }
}

// sum all values from evenStore array
var sum = evenStore.reduce(function(a, b) { return a + b; }, 0);

console.log("Even Fibonacci sequence #s : " + evenStore);
console.log("Sum of even Fibonacci sequence #s : " + sum);
