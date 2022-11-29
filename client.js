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

  employee.bonusPercentage;

  if (employee.reviewRating <= 2){
    employee.bonusPercentage = 0;
  } else if (employee.reviewRating === 3){
    employee.bonusPercentage = 4;
  } else if (employee.reviewRating === 4){
    employee.bonusPercentage = 6;
  } else if (employee.reviewRating === 5){
    employee.bonusPercentage = 10;
  }

  if (employee.employeeNumber.length === 4){
    employee.bonusPercentage += 5;
  }

  if (employee.annualSalary > 65000){
    employee.bonusPercentage -= 1;
  }

  let maxBonus = 13;
  let minBonus = 0;
  
  if (employee.bonusPercentage > maxBonus){
    employee.bonusPercentage = 13;
  } else if (employee.bonusPercentage < 0){
    employee.bonusPercentage = 0;
  }
 

  employee.totalBonus = Math.round(calculateTotalBonus(employee.annualSalary, employee.bonusPercentage));
  employee.totalComp = Math.round(calculateTotalComp(employee.totalBonus, employee.annualSalary));


  return employee;
  
  
  // return new object with bonus results

}

function calculateTotalBonus(annualSalary,bonusPercentage){
  let totalBonus = annualSalary * (bonusPercentage/100);
  return totalBonus;
}

function calculateTotalComp(totalBonus,annualSalary){
  let totalComp = totalBonus + parseInt(annualSalary);
  return totalComp;
}

console.log(calculateIndividualEmployeeBonus(employees[1]));
console.log(calculateIndividualEmployeeBonus(employees[2]));

let result = calculateTotalBonus(employees[1].annualSalary, employees[1].bonusPercentage);

console.log(result);

for (let emp of employees){
  console.log(calculateIndividualEmployeeBonus(emp));
}

