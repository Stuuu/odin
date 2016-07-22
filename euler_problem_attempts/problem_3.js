var numb = 600851475143;
var highestFactor = 0;
var upto = Math.sqrt(numb);


for (var fact = 2; fact < upto; fact++){

  isPrime = true;

    if((numb % fact) === 0) {

       for(var factTwo = 2; factTwo < Math.sqrt(fact); factTwo++){
          if (fact % factTwo === 0) {
            isPrime = false;
            break;
        }
       }
       if(isPrime) {
         highestFactor = fact;
       }
}
};

console.log("Largest Prime Factor of 600851475143 = " + highestFactor);
