// const axios = require("axios");

// // Helper functions
// const isPrime = (num) => {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// };

// const isPerfect = (num) => {
//   if (num < 2) return false;
//   let sum = 1;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       sum += i;
//       if (i !== num / i) sum += num / i;
//     }
//   }
//   return sum === num;
// };

// const isArmstrong = (num) => {
//   const digits = String(num).split("");
//   const sum = digits.reduce(
//     (acc, digit) => acc + Math.pow(Number(digit), digits.length),
//     0
//   );
//   return sum === num;
// };

// const getDigitSum = (num) => {
//   return String(num)
//     .split("")
//     .reduce((acc, digit) => acc + Number(digit), 0);
// };

// // Main function to get number properties
// const getNumberProperties = (num) => {
//   const properties = [];
//   if (isArmstrong(num)) properties.push("armstrong");
//   if (num % 2 === 0) properties.push("even");
//   else properties.push("odd");

//   return {
//     isPrime: isPrime(num),
//     isPerfect: isPerfect(num),
//     properties,
//     digitSum: getDigitSum(num),
//   };
// };

// // Fetch fun fact from Numbers API
// const fetchFunFact = async (num) => {
//   try {
//     const response = await axios.get(`http://numbersapi.com/${num}/math`);
//     return response.data;
//   } catch (error) {
//     return "No fun fact available for this number.";
//   }
// };

// module.exports = { getNumberProperties, fetchFunFact };


const axios = require("axios");
const {
  isPrime,
  isPerfect,
  isArmstrong,
  getDigitSum,
  getParity,
} = require("../utils/helpers");

// Main function to get number properties
const getNumberProperties = (num) => {
  const properties = [];
  if (isArmstrong(num)) properties.push("armstrong");
  properties.push(getParity(num)); // Add 'odd' or 'even'

  return {
    isPrime: isPrime(num),
    isPerfect: isPerfect(num),
    properties,
    digitSum: getDigitSum(num),
  };
};

// Fetch fun fact from Numbers API
const fetchFunFact = async (num) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math`);
    return response.data;
  } catch (error) {
    return "No fun fact available for this number.";
  }
};

module.exports = { getNumberProperties, fetchFunFact };