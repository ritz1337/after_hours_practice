/*
  1. Write a JavaScript program that accept two integers and display the larger.
     Hint: if/else loops
*/

var biggerNum = function(x,y) {
  if (x > y) {
    console.log(x);
  } else
      console.log(y);
}

/*
  2. Write a JavaScript conditional statement to find the product of three numbers.
      Hint: if/else loops

*/
var product = function(a,b,c) {
  var prod = a * b * c;
  return prod;
}

// didn't understand how to use conditional statement to do the same



/*
  3. Write a JavaScript conditional statement to find sort three numbers.
*/
var numSort = function(a, b, c) {
  if (a > b && a > c) {
   if (b > c) {
    console.log(a, b, c);
   } else if(c > b) {
    console.log(a, c, b);
   }
  }
  if (b > a && b > c) {
    if (a > c) {
      console.log(b, a, c);
    } else if (c > a) {
      console.log(b, c, a);
    }
  }
  if (c > a && c > b) {
    if (a > b) {
      console.log(c, a, b);
    } else if (b > a) {
      console.log(c, b, a);
    }
  }
}



/*
  4. Write a JavaScript programm that uses nested for loops to create this pattern
      *
      * *
      * * *
      * * * *
      * * * * *

      Hint: nested for loops
*/

//prints 16 stars
var starPrint = function(x) {
  var stars = '';
  for (var i = 0; i <= x; i ++) {
    for (var j = 0; j <= i; j ++) {
      stars += '* ';
      console.log(stars);
    }
  }
}

starPrint(4);

// works but dont understand why a nested for loop is necessary
var starPrinter = function(x) {
  var stars = "";
  for (var i = 0; i < x; i++) {
    stars = stars + "* ";
    console.log(stars);
  }
}

starPrinter(4);

//works
var printStars = function(x) {

  for (var i = 0; i < x; i++) {
     var output = "";
     for (var j = 0; j <= i; j++) {
      output += "* "
     }
     console.log(output);
  }
}

printStars(4);



