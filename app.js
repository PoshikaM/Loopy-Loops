// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var kalvian1 = 'vinayaga';
console.log(kalvian1);
var kalvian2 = 'muruga';
console.log(kalvian2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

if (kalvian1.length > kalvian2.length) {
  console.log('The driver has the longest name');
} else if (kalvian1.length < kalvian2.length) {
  console.log('The navigator has the longest name');
} else {
  console.log('Wow, you both have equally long names');
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5.

var hasAVowel = false;
var vowel = 'aeiou';
for (var i = 0; i < kalvian1.length; i++) {
  var letter = kalvian1[i];
  var isVowel = false;

  for (var j = 0; j < vowel.length; j++) {
    if (letter === vowel[j]) {
      isVowel = true;
      break;
    }
  }
  if (isVowel) {
    hasAVowel = true;
    console.log(letter, i + 1);
  }
}

if (hasAVowel) {
  console.log(kalvian1, 'has vowel');
} else {
  console.log(kalvian1, 'has no vowel');
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

let uppercase = 0;
let lowercase = 0;
for (var i = 0; i < kalvian1.length; i++) {
  var char = kalvian1[i];
  if (char == char.toUpperCase()) {
    uppercase += 1;
  } else {
    lowercase += 1;
  }
}
console.log('uppercase =', uppercase);
console.log('lowercase', lowercase);

let uppercasea = 0;
let lowercasea = 0;
for (var j = 0; j < kalvian2.length; j++) {
  var char = kalvian2[j];
  if (char == char.toUpperCase()) {
    uppercasea += 1;
  } else {
    lowercasea += 1;
  }
}
console.log(uppercasea);
console.log(lowercasea);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"

var spacing = kalvian1.split('').join(' ').toUpperCase();
console.log(spacing);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"

var reversing = kalvian2.split('').reverse().join('  ');
console.log(reversing);

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"

var first = kalvian1 + ' ' + kalvian2;
console.log(first);

var second = kalvian2 + ' ' + kalvian1;
console.log(second);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

var strings = [kalvian1, kalvian2];

for (var i = 0; i < strings.length - 1; i++) {
  for (var j = i + 1; j < strings.length; j++) {
    if (strings[i] > strings[j]) {
      [strings[i], strings[j]] = [strings[j], strings[i]];
    }
  }
}

// Printing the manually sorted array
console.log(strings);

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
