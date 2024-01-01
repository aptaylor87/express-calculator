const { checkArrForNums, calculateMean, calculateMedian, calculateMode } = require('./functions');

describe('calculateMode', () => {
    it('should return the mode value(s) when there is a mode', () => {
      const numbersArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
      const modeValue = calculateMode(numbersArray);
      expect(modeValue).toEqual([1, 3, 5]); // Replace with the expected mode values
    });
  
    it('should return "No mode" when all values occur equally', () => {
      const numbersArray = [1, 2, 3, 4, 5];
      const modeValue = calculateMode(numbersArray);
      expect(modeValue).toEqual('No mode');
    });
  });

  describe('calculateMedian', () => {
    it('should return the median for an array with odd length', () => {
      const numbersArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];
      const medianValue = calculateMedian(numbersArray);
      expect(medianValue).toEqual(4); // Replace with the expected median value
    });
  
    it('should return the median for an array with even length', () => {
      const numbersArray = [1, 2, 3, 4, 5, 6];
      const medianValue = calculateMedian(numbersArray);
      expect(medianValue).toEqual(3.5); // Replace with the expected median value
    });
  });


  describe('calculateMean', () => {
    it('should return the mean for an array with numbers', () => {
      const numbersArray = [1, 2, 3, 4, 5];
      const meanValue = calculateMean(numbersArray);
      expect(meanValue).toEqual(3); // Replace with the expected mean value
    });
  
  
    it('should return NaN for an empty array', () => {
      const numbersArray = [];
      const meanValue = calculateMean(numbersArray);
      expect(isNaN(meanValue)).toBe(true);
    });
  });