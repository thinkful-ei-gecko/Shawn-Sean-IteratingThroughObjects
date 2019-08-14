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
const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(student){
  student.forEach(function (element) {
    element.status = 'In Summer School';
  });
  return student;
}


enrollInSummerSchool(studentData);
console.log(studentData);
 


/* From here down, you are not expected to understand.... for now :)
  Nothing to see here!

*/

// tests

function testIt() {
  var testData = [
    {
      name: 'Burt',
      status: 'Playing hooky',
      course: 'Biology',
    },
    {
      name: 'Melanie',
      status: 'Sick',
      course: 'Mathematics',
    },
    {
      name: 'Leonard',
      status: 'AWOL',
      course: 'Computer science',
    },
  ];

  var results = enrollInSummerSchool(testData);

  if (!(results && results instanceof Array)) {
    console.error('FAILURE: `enrollSummerSchool` must return an array');
    return;
  }
  var result = testData.every(function(student) {
    var match = results.find(function(_student) {
      return (
        _student.name === student.name &&
        _student.course === student.course &&
        _student.status.toLowerCase() === 'in summer school'
      );
    });
    return match !== undefined;
  });
  if (!result) {
    console.error(
      'FAILURE: `enrollSummerSchool` should return ' +
        'original key/value pairs for each student, and ' +
        'update `status` to "In Summer school": ' +
        JSON.stringify(results)
    );
  } else {
    console.info('SUCCESS: `enrollSummerSchool` is working');
  }
}

testIt();


//Assignment 3
//Find by ID



//Assignemtn 4
//Validate object keys