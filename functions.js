
function calculateMean(arrayOfNumbers) {
    let sum = arrayOfNumbers.reduce(function (acc, num) {
      return acc + num;
    }, 0);
  
    let mean = sum / arrayOfNumbers.length;
  
    return mean;
}






function calculateMedian(arrayOfNumbers) {
  // Step 1: Sort the array
  const sortedArray = arrayOfNumbers.slice().sort((a, b) => a - b);

  const length = sortedArray.length;

  // Step 2: Check if the array has an odd or even length
  if (length % 2 === 1) {
    // Odd length
    const middleIndex = Math.floor(length / 2);
    return sortedArray[middleIndex];
  } else {
    // Even length
    const middleIndex1 = length / 2 - 1;
    const middleIndex2 = length / 2;
    return (sortedArray[middleIndex1] + sortedArray[middleIndex2]) / 2;
  }
}

function calculateMode(arrayOfNumbers) {
  // Create an object to store the frequency of each number
  const frequencyMap = {};

  // Populate the frequency map
  arrayOfNumbers.forEach(number => {
    frequencyMap[number] = (frequencyMap[number] || 0) + 1;
  });

  // Find the mode(s)
  let modeValues = [];
  let maxFrequency = 0;

  for (const number in frequencyMap) {
    const frequency = frequencyMap[number];

    if (frequency > maxFrequency) {
      // Found a new maximum frequency
      maxFrequency = frequency;
      modeValues = [Number(number)];
    } else if (frequency === maxFrequency) {
      // Another number with the same frequency
      modeValues.push(Number(number));
    }
  }

  // If all values occur equally, there is no mode
  if (modeValues.length === Object.keys(frequencyMap).length) {
    return 'No mode';
  }

  return modeValues;
}

function checkArrForNums(inputArr) {
  const nonNumberValues = inputArr.filter(value => isNaN(Number(value)));
  return nonNumberValues
}

module.exports = {
  checkArrForNums,
  calculateMean,
  calculateMedian,
  calculateMode
};