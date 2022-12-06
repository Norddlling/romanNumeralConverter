//convert numbers from 1 to 9999
function convertToRoman(num) {
  let romanNumeralArr = [];
  let numeralRoman = "";
  let numToStr = num.toString();
  let convertNum = "";
  for (let i = numToStr.length; i >= 0; i--) {
    numToStr -= convertNum;
    numToStr = numToStr.toString();
    convertNum = numToStr.slice(i);
    convertNum = Number(convertNum);
    if (1 <= convertNum <= 9) {
      switch(convertNum) {
        case 1:
          romanNumeralArr.unshift("I");
          break;
        case 2:
          romanNumeralArr.unshift("II");
          break;
        case 3:
          romanNumeralArr.unshift("III");
          break;
        case 4:
          romanNumeralArr.unshift("IV");
          break;
        case 5:
          romanNumeralArr.unshift("V");
          break;
        case 6:
          romanNumeralArr.unshift("VI");
          break;
        case 7:
          romanNumeralArr.unshift("VII");
          break;
        case 8:
          romanNumeralArr.unshift("VIII");
          break;
        case 9:
          romanNumeralArr.unshift("IX");
          break;
      }
    } 
    if (10 <= convertNum <= 90) {
      switch(convertNum) {
        case 10:
          romanNumeralArr.unshift("X");
          break;
        case 20:
          romanNumeralArr.unshift("XX");
          break;
        case 30:
          romanNumeralArr.unshift("XXX");
          break;
        case 40:
          romanNumeralArr.unshift("XL");
          break;
        case 50:
          romanNumeralArr.unshift("L");
          break;
        case 60:
          romanNumeralArr.unshift("LX");
          break;
        case 70:
          romanNumeralArr.unshift("LXX");
          break;
        case 80:
          romanNumeralArr.unshift("LXXX");
          break;
        case 90:
          romanNumeralArr.unshift("XC");
          break;
      }
    }
    if (100 <= convertNum <= 900) {
      switch(convertNum) {
        case 100:
          romanNumeralArr.unshift("C");
          break;
        case 200:
          romanNumeralArr.unshift("CC");
          break;
        case 300:
          romanNumeralArr.unshift("CCC");
          break;
        case 400:
          romanNumeralArr.unshift("CD");
          break;
        case 500:
          romanNumeralArr.unshift("D");
          break;
        case 600:
          romanNumeralArr.unshift("DC");
          break;
        case 700:
          romanNumeralArr.unshift("DCC");
          break;
        case 800:
          romanNumeralArr.unshift("DCCC");
          break;
        case 900:
          romanNumeralArr.unshift("CM");
          break;
      }
    }
    if (1000 <= convertNum <= 9000) {
      switch(convertNum) {
        case 1000:
          romanNumeralArr.unshift("M");
          break;
        case 2000:
          romanNumeralArr.unshift("MM");
          break;
        case 3000:
          romanNumeralArr.unshift("MMM");
          break;
        case 4000:
          romanNumeralArr.unshift("IV");
          break;
        case 5000:
          romanNumeralArr.unshift("V");
          break;
        case 6000:
          romanNumeralArr.unshift("I̅V̅");
          break;
        case 7000:
          romanNumeralArr.unshift("V̅");
          break;
        case 8000:
          romanNumeralArr.unshift("V̅I̅I̅I");
          break;
        case 9000:
          romanNumeralArr.unshift("I̅X̅");
          break;
      }
    }
  }
  return numeralRoman = romanNumeralArr.join("");
}

convertToRoman(36);
