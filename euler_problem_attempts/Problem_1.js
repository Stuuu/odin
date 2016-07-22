var mulThree = []; //Array to store multiples of 3
var mulFive = []; //Array to store multiples of 5

// for loop to push multiples of 3 into Array mulThree
for (i=0; i < 1000; i+= 3) {
 mulThree.push(i);
};

// for loop to push multiples of 5 into Array mulFive
for (var l=0; l < 1000; l+= 5) {
 mulFive.push(l);
}

// Concatinate both Arrays mulThree & mulFive into one bothMulti
var bothMulti = mulThree.concat(mulFive);

// Eliminate duplicates of shared multiples from Array bothMulti and store it as uniq
var uniq = bothMulti.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;},[]);

// Sum all values in Array uniq for final.
var sum = uniq.reduce(function(a, b) { return a + b; }, 0);


//optional logs below

console.log("Multiples of 5: "  + mulFive.length);

console.log("Multiples of 3: " + mulThree.length);

console.log("Multiples of both total: " + bothMulti.length);

console.log( "Number of unique multiples: " + uniq.length);

console.log("Sub of both multiples = " +sum);
