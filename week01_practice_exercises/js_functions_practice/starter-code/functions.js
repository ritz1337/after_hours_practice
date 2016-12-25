
// Question 1
function maxOfTwoNumbers(x, y) {
  if (x > y){
    return x;
  } else return y;
}

console.log(maxOfTwoNumbers(8, 7));


// Question 2
function maxOfThree(x, y, z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else return z;
}

console.log(maxOfThree(7, 5, 11));

// Question 3
function isCharacterAVowel(x) {
  if (x === 'a' || x === 'e' || x === 'i' || x === 'o'|| x === 'u') {
    return true;
  }  else return false;
};

console.log(isCharacterAVowel('4'));

// Question 4
function sumArray(x) {
  var sum = 0;
  x.forEach (function(num) {
    return sum = sum + num;
  })
  return sum;
};

console.log(sumArray([500, 1000, 250, 100]));

// Question 4
function multiplyArray(arr) {
  var mul = 1;
  arr.forEach (function(num){
    mul = mul * num;
  })
    return mul;
};
console.log(multiplyArray([5, 6, 7, 1, 2]));


// Question 5
var numberOfArguments = function(){
  return arguments.length
};

console.log(numberOfArguments("ddsd", "dsadadas", 7));


// Question 6
var reverseString = function(rev){
  var str = '';
  for (var i= rev.length -1; i >=0; i--) {
    str = str + rev[i];
  }
  return str;
};

console.log(reverseString("boogawooga"));

// Question 7
function findLongestWord (arr) {
 var lword = '';
  for (var i = 0; i < arr.length; i++){
    if (arr[i].length > lword.length)
      lword = arr[i];
  }
  return lword;
}

console.log(findLongestWord(["fdsfdsfsdfword", "longerword", "longestword","fdsfdsdewfewf"]));

// Question 8
function filterLongWords (arr, i) {
  var newArr = [];
  for ( var x = 0; x < arr.length; x++ ) {
    if ( arr[x].length > i) {
      newArr.push(arr[x]);
    };
  };
  return newArr;
};

console.log(filterLongWords(["a", "ab", "abc", "abcd", "y", "pokemon"], 2));

// Bonus 1
//??????


// Bonus 2
function charactersOccurencesCount() {

}

