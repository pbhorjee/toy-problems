/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function (romanNumeral) {
  var ret = 0;

  for (var i = 0; i < romanNumeral.length; i++) {
    if (!DIGIT_VALUES[romanNumeral[i]]) {
      return "null";
    } else {
      var thisVal = DIGIT_VALUES[romanNumeral[i]];
    }

    if (romanNumeral[i + 1] && thisVal < DIGIT_VALUES[romanNumeral[i + 1]]) {
      ret = ret - thisVal;
    } else {
      ret = ret + thisVal;
    }
  }

  return ret;
};

console.log(translateRomanNumeral("horse")); //null
//console.log(translateRomanNumeral("LX")); //60
//console.log(translateRomanNumeral("IV")); //4
//console.log(translateRomanNumeral("XCVIII")); //98
//console.log(translateRomanNumeral("XCIX")); //99
//console.log(translateRomanNumeral("DCCCXC")); //890
//console.log(translateRomanNumeral("LXXXVIII")); //88
//console.log(translateRomanNumeral("LXXXIX")); //89
//console.log(translateRomanNumeral("DI")); //501
//console.log(translateRomanNumeral("DCCVII")); //707