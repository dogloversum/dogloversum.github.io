

let employees = 
[
    {"firstName": "Sam", "department": "Tech", "designation": "Manager", "salary": 40000,"raiseEligible": "true"},
    {"firstName": "Mary", "department": "Finance", "designation": "Trainee", "salary": 18500,"raiseEligible": "true"},
    {"firstName": "Bill", "department": "HR", "designation": "Executive", "salary": 21200,"raiseEligible": "false"}, 
]


let companyInfo = 
{"company":
    {"companyName": "Tech Stars","website":"www.techstars.site","employees":employees}
}


//problem 1
console.log("Problem 1: ")
console.log(employees)

//problem 2 
console.log("Problem 2: ")
console.log(companyInfo.company)

//problem 3 
employees.push({"firstName": "Anna", "department": "Tech","designation":"Executive","salary":25600,"raiseEligible":"false"})

console.log("Problem 3: ")
console.log(employees)

//problem 4
let total = 0
for(let i = 0; i < 4; i++)
{
    total+= employees[i].salary
}

console.log("Problem 4:")
console.log(total)

//problem 5
for(let i = 0; i < 4; i++) 
{
   if (employees[i].raiseEligible === "true"){
        employees[i].salary = employees[i].salary * 1.1;
   } 
}

console.log("Problem 5: ")
console.log(employees)

//problem 6
for(let i = 0; i < 4; i++) 
{
    if (employees[i].firstName === "Anna" || employees[i].firstName === "Sam") {
    employees[i].wfh = true
} else{
    employees[i].wfh = false
}
}

console.log("Problem 6: ")
console.log(employees)