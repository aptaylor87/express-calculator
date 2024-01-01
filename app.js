const express = require('express');
const { checkArrForNums, calculateMean, calculateMedian, calculateMode } = require('./functions');
const ExpressError = require('./expressError');
const app = express();

app.use(express.json());



app.get("/mean", (req, res, next) => {
  try {
    const nums = req.query.nums; 
    if (!nums) {
      throw new ExpressError("nums are required", 400)
    }
    const numsArray = nums.split(',');
    if (checkArrForNums(numsArray).length > 0) {
      throw new ExpressError(`${checkArrForNums(numsArray)} is not a number`)
    }
  
    const meanValue = calculateMean(numsArray.map(Number))
    const response = {
    operation: "mean",
    value: meanValue
  }
  return res.json(response)
  } catch (e) {
    next(e)
  }
  
})

app.get("/median", (req, res, next) => {
  try {
    const nums = req.query.nums; 
    if (!nums) {
      throw new ExpressError("nums are required", 400)
    }
    const numsArray = nums.split(',');
    if (checkArrForNums(numsArray).length > 0) {
      throw new ExpressError(`${checkArrForNums(numsArray)} is not a number`)
    }
  
    const medianValue = calculateMedian(numsArray.map(Number))
    const response = {
    operation: "median",
    value: medianValue
  }
  return res.json(response)
  } catch (e) {
    next(e)
  }
  
})

app.get("/mode", (req, res, next) => {
  try {
    const nums = req.query.nums; 
    if (!nums) {
      throw new ExpressError("nums are required", 400)
    }
    const numsArray = nums.split(',');
    if (checkArrForNums(numsArray).length > 0) {
      throw new ExpressError(`${checkArrForNums(numsArray)} is not a number`)
    }
  
    const modeValue = calculateMode(numsArray.map(Number))
    const response = {
    operation: "mode",
    value: modeValue
  }
  return res.json(response)
  } catch (e) {
    next(e)
  }
  
})


// If no other route matches, respond with a 404
app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404)
    next(e)
  })
  
  
  // Error handler
  app.use(function (err, req, res, next) { //Note the 4 parameters!
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.msg;
  
    // set the status and alert the user
    return res.status(status).json({
      error: { message, status }
    });
  });
  
  app.listen(3000, () => {
    console.log("Server running on port 3000")
  });
  