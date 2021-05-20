/*
Challenge 5:
Build a food ordering system where the user inputs the food name into the food order and then 
the order gets passed to the appropriate restaurant on a list and the restaurant prints the receipt on stdout.
No need to create a UI, a main function that receives parameters is enough.

For example: 
     Input: “pepperoni pizza”
     Output: "Awesome pizza place, pepperoni pizza, $20”
For example: 
     Input: “burger”
     Output: “wild burger joint, burger, $15”
*/

//I am assuming that there are 2 restaurants, If a user types any substring of the name of the restaurant
//He will be directed to that place, for example if he types Pizza he will be  taken to Pizza Haven
//And will be asked to pick any dish
//There are some limitations to this code but can be easily resolved. They havent been resolved due to
//The time constraint

'use strict'

const restaurants = [{
    id:1,
    nameOfRestaurant: "Major Toms a Burger Junkie",
    menu:[
    {
         id:1,
         dishName: "Major Burger",
         price: 25
    },
    {
          id:2,
          dishName: "Minor Burger",
          price: 15
}]
},
    {
    id:2,
    nameOfRestaurant:"Pizza Haven",
    menu:[
    {
          id:1,
          dishName:"The Wonder Pizza",
          price: 39.99
    },
    {
          id:2,
          dishName:"The Everyday Pizza",
          price: 29.99
},
{
     id:3,
     dishName:"The Cheese Burst Pizza",
     price: 15.99
}]
}];

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let resName = '';

  const question1 = () => {
  return new Promise((resolve, reject) => {
  rl.question('What would you like to eat? : ', food => {
    const response = foodExists(food);
    let menu = [];

    if(response===false){
         console.log('Food not found');
         process.exit(1);
    }
    else if(response===true){
         menu = returnMenu(food);
         resName = returnRestaurantName(food);
         console.log(`Welcome to ${resName}`);
         console.log(`Which ${food} would you like to eat : \n ${JSON.stringify(menu,null,2)}`);
    }
    resolve();
  });
})
}

const question2 = () => {
     let restIndex = restaurants.findIndex(function (restName) {
          return restName.nameOfRestaurant === resName;
     });
     return new Promise((resolve, reject) => {
          rl.question('Enter ID of item you would like to eat: ', idChosen => {
          for(let i=0;i<restaurants[restIndex].menu.length;i++){
               if(idChosen===(restaurants[restIndex].menu[i].id).toString()){
                    console.log(resName + ", " + restaurants[restIndex].menu[i].dishName 
                    + ", $" + restaurants[restIndex].menu[i].price);
               }
          }
          resolve()
       })
     })       
}
const returnMenu = food => {
     for(let i=0;i<restaurants.length;i++){
          if(restaurants[i].nameOfRestaurant.toLowerCase().includes(food.toLowerCase())){
               return restaurants[i].menu;
          }
     } 
}

const returnRestaurantName = food => {
     for(let i=0;i<restaurants.length;i++){
          if(restaurants[i].nameOfRestaurant.toLowerCase().includes(food.toLowerCase())){
               return restaurants[i].nameOfRestaurant;
          }
     } 
}

const foodExists = food => {
     for(let i=0;i<restaurants.length;i++){
          if(restaurants[i].nameOfRestaurant.toLowerCase().includes(food.toLowerCase())){
               return true;
          }
     }
     return false;
}

const main = async () => {
  await question1()
  await question2()
  rl.close()
}

main()