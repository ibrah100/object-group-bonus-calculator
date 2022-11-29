// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.




// This function will calculate 1 employee's bonus!
//

function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here

  employee.bonusPercentage; //make a new object property called bonusPercentage...it's undefined
//conditionals to determine bonusPercentage based on performance
  if (employee.reviewRating <= 2){ //check if employee review is 2 or less
    employee.bonusPercentage = 0; //if true, no bonus
  } else if (employee.reviewRating === 3){ // check if review is 3
    employee.bonusPercentage = 4; //if true, get 4% bonus
  } else if (employee.reviewRating === 4){ //check if review is 4 
    employee.bonusPercentage = 6; //if true, get 6% bonus
  } else if (employee.reviewRating === 5){ //check if review is 5
    employee.bonusPercentage = 10; //if true, great job, 10% bonus
  }
//conditionals to determine changes to bonusPercentage based on length of employee number
  if (employee.employeeNumber.length === 4){ //check if number is length of 4
    employee.bonusPercentage += 5; //if true, add 5% to bonus
  }
//conditional to determine changes to bonusPercentage based on salary
  if (employee.annualSalary > 65000){ //check if salary is greater than 65k
    employee.bonusPercentage -= 1; // if true, subtract 1% from bonus
  }
//declare the maximum and minimum bonusPercentages that can be received
  let maxBonus = 13; //variable maxBonus set to value 13
  let minBonus = 0; //variable minBonus set to value 0
  //conditional to make sure than no one gets more than 13 or less than 0
  if (employee.bonusPercentage > maxBonus){ // check if bonusPercentage is greater than maxBonus
    employee.bonusPercentage = maxBonus; //if true, you gotta share, set bonusPercentage to maxBonus
  } else if (employee.bonusPercentage < minBonus){ //check if bonusPercentage is less than minBonus
    employee.bonusPercentage = minBonus;// if true, we don't steal from people, set bonusPercentage to minBonus
  }
 //now make object property of totalBonus and assign to value of calculateTotalBonus (see line 92) rounded to nearest integer
  employee.totalBonus = Math.round(calculateTotalBonus(employee.annualSalary, employee.bonusPercentage));
 //now make object property of totalComp and assign to value of calculateTotalComp (see line 97) rounded to nearest integer 
  employee.totalComp = Math.round(calculateTotalComp(employee.totalBonus, employee.annualSalary));
//return the object employee (including all properties previously stated and those we created)
  return employee;
  // return new object with bonus results
}
//make function to calculate totalBonus based on annual salary and bonusPercentage
function calculateTotalBonus(annualSalary,bonusPercentage){ //takes two parameters of salary and percentage
  let totalBonus = annualSalary * (bonusPercentage/100); //multiplies salary by percentage as a decimal
  return totalBonus;//returns totalBonus
}
//make function to calculate totalComp based on total bonus and annual salary
function calculateTotalComp(totalBonus,annualSalary){ //takes two parameters of salary and percentage
  let totalComp = totalBonus + parseInt(annualSalary); //added totalBonus to annual salary (converted to a string)
  return totalComp; //returns totalComp
}

//test calculateIndividualEmployeeBonus function 
console.log(calculateIndividualEmployeeBonus(employees[1])); 
console.log(calculateIndividualEmployeeBonus(employees[2]));

//testing calculateTotalBonus function
let result = calculateTotalBonus(employees[1].annualSalary, employees[1].bonusPercentage);
console.log(result);

//create a loop to calculate bonuses for all
for (let emp of employees){ //iterates through the entire employee array
  console.log(calculateIndividualEmployeeBonus(emp));//applies calculate bonuses and compensation for each employee
}

