var palys = [];
for (i=999; i > 99; i--){
  for (f=999;f!=i; f--){
  var num = (f * i);
  // #explored pre-checking last digit for "palindromic" compatibility to decrease iterations
  var lastDigit = num.toString().slice(-1);
  var firstDigit = num.toString()[0];
  if (firstDigit === lastDigit){
  var f_int = num.toString();
  var r_int = f_int.split("").reverse().join("");
  if ( f_int === r_int) {
      palys.push(num);
    }
  }
}
};
var uniq_pals = palys.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;},[]);
    var large_pal = Math.max.apply(Math, uniq_pals);
    console.log("Largest Palindrome: " + large_pal);
