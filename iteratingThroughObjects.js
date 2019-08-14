/* eslint-disable strict */

/**
 *  Iterating Through Objects 8/14/2019
 */

//Assignment 1
//Make student reports
function makeStudentsReport(data) {
  let result = [];
  data.forEach(function (element) {
    result.push(`${element.name}: ${element.grade}`);
  });
  console.log(result);
  return result;
}

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

makeStudentsReport(testData);


//Assignment 2
//Enroll in summer school



//Assignment 3
//Find by ID



//Assignemtn 4
//Validate object keys