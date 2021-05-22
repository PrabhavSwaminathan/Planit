/*
Challenge 6:
Given a list of people (each person has attributes like name, DOB, nationality) 
and in this world two people can’t have the exact same name then a user can:

* Obtain a list of duplicates from the original list
* Alter the original list and remove duplicates
* Calculate the average age
* Find all the people with age less than N
* Obtain a list of unique countries

*/

'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('person.json');
let person = JSON.parse(rawdata);


const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log("Please Choose from the options below: ");
console.log("1. Display Original list");
console.log("2. Obtain a list of Duplicates from the list");
console.log("3. Alter the original list and remove duplicates")
console.log("4. Calculate the average age");
console.log("5. Find all the people with age less than N");
console.log("6. Obtain a list of unique countries");

const question1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Enter your choice? : ', choice => {
          switch(choice){
            case '1': 
                console.log(person);
              break;
            case '2':
              for(let i=0;i<person.length;i++){
                  for(let j=i+1;j<person.length;j++){
                    if(person[i].id===person[j].id){
                        console.log(person[i]);
                    }
                  }
              }
              break;
            case '3':
                for(let i=0;i<person.length;i++){
                    for(let j=i+1;j<person.length;j++){
                      if(person[i].id===person[j].id){
                          person.splice(j,1);
                      }
                    }
                }
                let data = JSON.stringify(person,null,2);
                fs.writeFileSync('person1.json', data);
                console.log(person);
              break;
            case '4':

                let sumOfAges = 0;
                let avgAge = 0;
                for(let i=0;i<person.length;i++){
                    let dateOfBirth = new Date(person[i].DOB)
                    let diff_ms = Date.now() - dateOfBirth.getTime();
                    let age_dt = new Date(diff_ms);
                    let ageYears =  Math.abs(age_dt.getUTCFullYear() - 1970);
                    sumOfAges += ageYears;
                }
                avgAge = sumOfAges/person.length;
                console.log(`Average age is : ${avgAge}`)
              break;
            case '5':
                question2();
              break;
            case '6':
                let uniqueCountries = [];
                for(let i=0;i<person.length;i++){
                      if(!uniqueCountries.includes(person[i].country)){
                        uniqueCountries.push(person[i].country)
                      }
                    }
                console.log(uniqueCountries);
                process.exit(1);    
              break;
            default: console.log("Incorrect Choice");
              
          }  
          resolve();
        });
    })
}

const question2 = () => {
    return new Promise((resolve, reject) => {
         rl.question('Enter N: ', n => {
         for(let i=0;i<person.length;i++){
            let dateOfBirth = new Date(person[i].DOB)
            let diff_ms = Date.now() - dateOfBirth.getTime();
            let age_dt = new Date(diff_ms);
            let ageYears =  Math.abs(age_dt.getUTCFullYear() - 1970);
            if(ageYears<n){
                console.log(person[i].name);
            }
         }
         resolve()
         process.exit(1);    
      })
    })   
}



const main = async () => {
    await question1()
    await question2()
    rl.close()
  }
  
  main()

