"use strict";
/*
// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/
/*
// ////////////////////////////////////////////////
//------- distructing method---------
// normal way
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
// using the method
const [x, y, z] = arr;
console.log(x, y, z);
// 2 3 4

// now work with the resturnt object
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
// const [firtst, second] = restaurant.categories;
// console.log(firtst, second);

//Italian Pizzeria

// if we want to take  categories[0], categories[2] instade of  categories[0], categories[1] what we will do
// =>
// const [first, ,third]=restaurant.categorie
let [first, , third] = restaurant.categories;
console.log(first, third);
// out put    :  Italian Vegetarian
// swiching position
[first, third] = [third, first];
console.log(first, third);
// Vegetarian Italian

// another tric with distructing an array
// we can have a function that return an array and then we can immediatly distruct the result into multiple variable this bascially alowes as to return multiple values from a function
// add function to the object should be decleare in let or var
// restaurant.order = function () {};

// console.log(restaurant.order(2, 0));
//  ['Garlic Bread', 'Pizza']

// recive 2 return value from a function
const [starter, main] = restaurant.order(2, 0);
console.log(starter, main);
// Garlic Bread Pizza

//======= distructing nested array========
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// (2) [5, 6]

// *******************destructuring inside of destructuring****************
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);
// 2 5 6
// defult value
// const [p , q , r ] = [8, 9];
// console.log(p, q, r);
// // 8 9 undefined
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
//8 9 1
*/
// ///////////////////////////////////////////////////////////////////////////////
// ---------------------------destructruing objects---------------------------------
/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //one way taking object as parameters to function

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

  //anoter way taking object as parameters to function and also set defult value 

  orderDelivery: function ({ time='20:00', address='', mainIndex=0, starterIndex=1 }) {
    console.log(
      `order reciver! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to  ${address} at ${time}`
    );
  },
};
// passing an object as arguments
restaurant.orderDelivery({
  time: "22:30",
  address: "via del sole,21",
  mainIndex: 2,
  starterIndex: 2,
});

// to distructing a object we have to take exectly name as object property name and order does not matter here
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//------------> output<-----------------
// Classico Italiano
// {thu: {…}, fri: {…}, sat: {…}}
// fri: {open: 11, close: 23}
// sat: {open: 0, close: 24}
// thu: {open: 12, close: 22}
// [[Prototype]]: Object
// (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
// 0: "Italian"
// 1: "Pizzeria"
// 2: "Vegetarian"
// 3: "Organic"
// length: 4

// * now what  happend if we want to variable name to diffrent of property name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// -------------->output<-------------
// Classico Italiano
// {thu: {…}, fri: {…}, sat: {…}}
// fri: {open: 11, close: 23}
// sat: {open: 0, close: 24}
// thu: {open: 12, close: 22}
// [[Prototype]]: Object
// (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
// 0: "Italian"
// 1: "Pizzeria"
// 2: "Vegetarian"
// 3: "Organic"
// length: 4

// ----- defult value
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);
// output-------------------------->
// [] for menu
//  for starter
// (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
// 0: "Focaccia"
// 1: "Bruschetta"
// 2: "Garlic Bread"
// 3: "Caprese Salad"
// length: 4

// -----------------------mutating variables----------------
let a = 111;
let b = 9999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
// output is----------->
// 23 7

// ----------------------------nested objects-------------------
const {
  openingHours: {
    fri: { open: o, close: l },
  },
} = restaurant;
console.log(o, l);
// output---------->
// 11 23
*/

// --------------------------------spread operators-----------------------------
/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    time = "20:00",
    address = "",
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `order reciver! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to  ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
};

// manual
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
//[1, 2, 7, 8, 9]
// using spread operators
const newArr = [1, 2, ...arr];
console.log(newArr);
// [1, 2, 7, 8, 9]

console.log(...newArr);
// 1 2 7 8 9
const newMenu = [...restaurant.mainMenu, "gnocci"];
console.log(...newMenu);
// Pizza Pasta Risotto gnocci

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(...mainMenuCopy);
// Pizza Pasta Risotto

// marger 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(...menu);
// Focaccia Bruschetta Garlic Bread Caprese Salad Pizza Pasta Risotto

// spread operators on string
const str = "sourav";
const letter = [...str, "s"];
console.log(letter);
// (7) ['s', 'o', 'u', 'r', 'a', 'v', 's']

// console.log(`${...str} pramanik`); we can not use it in template littreals
// script.js:295 Uncaught SyntaxError: Unexpected token '...
// real world example
// now use in function
// make an array using prompt function
/*
const ingrediends = [
  prompt("let's make your pasta! ingrediend 1?"),
  prompt("let's make your pasta! ingrediend 2?"),
  prompt("let's make your pasta! ingrediend 3?"),
];
console.log(ingrediends);
// calling function
restaurant.orderPasta(...ingrediends);
*/
// copying  object
/*
const newRESturant = { foundedIn: 1998, ...restaurant, founder: "sourav" };
console.log(newRESturant);

//  chnaging copyin object property
newRESturant.name = "ristorante roma";
console.log(newRESturant.name);
// ristorante roma

console.log(restaurant.name);
// script.js:326 Classico Italiano
*/
// /////////////////////////////////////////////////////////////////////////////////
// -------------------REST PATTERN AND PARAMETERS----------------------------
/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    time = "20:00",
    address = "",
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `order reciver! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to  ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngrediends, ...otherIngrediends) {
    console.log(mainIngrediends);
    console.log(otherIngrediends);
  },
};
// 1 distructring

// spread ,beacuse on right side of =
const arr = [1, 2, [4, 5]];

// rest ,becausae it left side of a=
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
// 1 2 (3) [3, 4, 5]

const [Pizza, , res, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, res, otherFood);
// -output-
// Pizza Risotto
// (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
// 0: "Focaccia"
// 1: "Bruschetta"
// 2: "Garlic Bread"
// 3: "Caprese Salad"
// length: 4

// on object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
// output
// {thu: {…}, fri: {…}}

// 2 on function
const add = function (...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  console.log(sum);
};
//function calling single variable
add(2, 5); //7
add(2, 5, 4, 7, 5, 6, 4, 5, 7); //45
add(2, 5, 7, 8, 9, 4, 5, 6, 1, 2, 3, 7); //59
// function calling with array unsing spread operators
const x = [25, 45, 14, 52, 46, 12, 78, 45];
add(...x); //317

restaurant.orderPizza("chicken", "red chili", "onoin", "mooton");
restaurant.orderPizza("chicken");
*/

// ////////////////////////////////////////////////////////////////////////////////////
// short-circuitting
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     time = "20:00",
//     address = "",
//     mainIndex = 0,
//     starterIndex = 1,
//   }) {
//     console.log(
//       `order reciver! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to  ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
//     );
//   },
//   orderPizza: function (mainIngrediends, ...otherIngrediends) {
//     console.log(mainIngrediends);
//     console.log(otherIngrediends);
//   },
// };

// use any data types ,return any data types ,short-cricutting
/*
console.log("-------------------or--------------");

console.log(3 || "sourav"); //3
console.log("" || "sourav"); //sourav
console.log(true || 0); //true
console.log(undefined || null); //null
console.log(null || undefined); //undefined

restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

// and
console.log("-------------------and--------------");

console.log(0 && "sourav"); //0
console.log(7 && "sourav"); //sourav
console.log("sourav" && 7 && null && "pramnik"); //null

if (restaurant.orderPizza) {
  restaurant.orderPizza("mashroom", "spinach");
}

// using and short-circutting
restaurant.orderPizza && restaurant.orderPizza("mashroom", "spinach");
*/
/*
console.log("-------------------Nullish coalesing--------------");
restaurant.numGuest = 0;
const guest1 = restaurant.numGuest || 10;
console.log(guest1); //10

// it only set that defualt values if the values is nullish :(null, undefined,nan) not with false values(0,'')
const guest2 = restaurant.numGuest ?? 10;
console.log(guest2); //0
*/
// //////////////////////////////////////////////////////////////////////////////
/*Data Structures, Modern Operators and Strings
Coding Challenge #1
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and 
'players2')
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players
3. Create an array 'allPlayers' containing all players of both teams (22 
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
GOOD LUCK
*/
//  answer
/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    console.log(`  ${players.length} goals were scored`);
  },
};
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
console.log(game.players);
const [players1, players2] = [...game.players];
console.log(players1, players2);

// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players

const [gk, ...fieldPlayers] = [...players1];
console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players of both teams (22
//   players)

const allPlayers = [...players1, ...players2];
console.log(...allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//  5  Based on the game.odds object, create one variable for each odd (called
//   'team1', 'draw' and 'team2')

const { team1, x: draw, team2 } = { ...game.odds };
console.log(team1, draw, team2);
// another method of this is

// const {odds:{team1,x:draw,team2}}=game;

// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in

game.printGoals("davies");
game.printGoals("davies", "muller", "Lewandowski");
game.printGoals(...game.scored);

const teamWon = game.odds.team1 && game.odds.team2;
console.log(teamWon);

team1 < team2 && console.log(`team 1 is more likly is to win`);
*/

// //////////////////////////////////////////////////////////////////////////////

//  ----------------------------------- for -of loop-----------------------------
/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    time = "20:00",
    address = "",
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `order reciver! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to  ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngrediends, ...otherIngrediends) {
    console.log(mainIngrediends);
    console.log(otherIngrediends);
  },
};
// for - of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
// out put
//  Focaccia
//  Bruschetta
//  Garlic Bread
//  Caprese Salad
//  Pizza
//  Pasta
//  Risotto

// print array with the index number using  for -of loop
for (const item of menu.entries()) {
  console.log(item);
}
// output
//  [0, 'Focaccia']
//  [1, 'Bruschetta']
//  [2, 'Garlic Bread']
//  [3, 'Caprese Salad']
//  [4, 'Pizza']
//  [5, 'Pasta']
//  [6, 'Risotto']
// print using distructuring
for (const [i, ele] of menu.entries()) {
  console.log(`${i + 1} : ${ele}`);
}
// output
// 1 : Focaccia
// 2 : Bruschetta
// 3 : Garlic Bread
// 4 : Caprese Salad
// 5 : Pizza
// 6 : Pasta
// 7 : Risott
*/

// ///////////////////////////////////////////////////////////////////////////////////
// enhanced  object littreals
/*
const week = ["mon", "tue", "wed", "thu", "fri", "sat"];
// compute property name
const openingHours = {
  [week[1]]: {
    open: 12,
    close: 22,
  },
  [week[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 * 45}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //Es6 enhanced object littreals
  openingHours,
  // writting function in object with out uising the function key word
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({
    time = "20:00",
    address = "",
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `order reciver! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to  ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngrediends, ...otherIngrediends) {
    console.log(mainIngrediends);
    console.log(otherIngrediends);
  },
};
*/

// ///////////////////////////////////////////////////////////////////////////////

// optional chaning
/*
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    time = "20:00",
    address = "",
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `order reciver! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to  ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngrediends, ...otherIngrediends) {
    console.log(mainIngrediends);
    console.log(otherIngrediends);
  },
};

// console.log(restaurant.openingHours.mon.open);

// with optional chaning
console.log(restaurant.openingHours.mon?.open);
// undefined

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";// if we want use a variable as object property that is not define in the object we decleare it with openingHours[day]
  console.log(` on ${day}  resturant is open at ${open}`);
}
// output
// on mon  resturant is open at closed
//   on tue  resturant is open at closed
//   on wed  resturant is open at closed
//   on thu  resturant is open at 12
//   on fri  resturant is open at 11
//   on sat  resturant is open at closed
//   on sun  resturant is open at closed

// on method we call a method after checking that method will exit or not

console.log(restaurant.order?.(0, 1) ?? "method does not exit");

// on array
const user = [{ name: "sourav ", emails: "souravpramanik123@gmail.com" }];
console.log(user[0]?.emails ?? "user does not enter the email address");
*/
// /////////////////////////////////////////////////////////////////////////////////
// looping over the objects using for-of loop
const week = ["mon", "tue", "wed", "thu", "fri", "sat"];
// compute property name
const openingHours = {
  [week[1]]: {
    open: 12,
    close: 22,
  },
  [week[4]]: {
    open: 11,
    close: 23,
  },
  [week[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //Es6 enhanced object littreals
  openingHours,
  // writting function in object with out uising the function key word
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({
    time = "20:00",
    address = "",
    mainIndex = 0,
    starterIndex = 1,
  }) {
    console.log(
      `order reciver! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to  ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngrediends, ...otherIngrediends) {
    console.log(mainIngrediends);
    console.log(otherIngrediends);
  },
};

//property name
for (const pro of Object.keys(restaurant)) {
  // console.log(pro);
}
// output
// name
//  location
//  categories
//  starterMenu
//  mainMenu
//  openingHours
//  order
//  orderDelivery
//  orderPasta
//  orderPizza

const property = Object.keys(openingHours);
// console.log(property);
// (3) ['tue', 'fri', 'sat']
let openStr = `we are open ${property.length} days on a week`;

for (const day of property) {
  openStr += `: ${day}`;
}
// console.log(openStr);
// we are open 3 days on a week: tue: fri: sat

// prperty values
// const values = Object.values(openingHours);
// console.log(values);
// 0: {open: 12, close: 22}
// 1: {open: 11, close: 23}
// 2: {open: 0, close: 24}
// length: 3
// entries object
const entries = Object.entries(openingHours);
// console.log(entries);
for (const [key, { open, close }] of entries) {
  // console.log(`on ${key} we open at ${open} and closed at ${close}`);
}
// output------------------------------------->
// on tue we open at 12 and closed at 22
// script.js:957 on fri we open at 11 and closed at 23
// script.js:957 on sat we open at 0 and closed at 24

//////////////////////////////////////////////////////////////////////////////////
/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from 
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}

*/
/*
//  answer
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    console.log(`  ${players.length} goals were scored`);
  },
};

// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski"
const goal = Object.entries(game.scored);
console.log(goal);

for (const [j, key] of game.scored.entries()) {
  console.log(`goal ${j + 1}  ${key}`);
}
// output---------->
// goal 01 : Lewandowski
// goal 11 : Gnarby
// goal 21 : Lewandowski
// goal 31 : Hummels

// ///////////////////////////////////////////////////////////////////////////
// 2. Use a loop to calculate the average odd and log it to the console (We already
//   studied

const valuse = Object.values(game.odds);
console.log(valuse);
let sum = 0;
for (const no of valuse) {
  sum = sum + no;
}
const avg = sum / valuse.length;
console.log(avg);

// 3

for (const [teamNmae, score] of Object.entries(game.odds)) {
  const team = teamNmae == "x" ? `draw` : `vectory ${game[teamNmae]}`;
  console.log(`odd ${team} : ${score}`);
}
// bonus
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/
// ////////////////////////////////////////////////////////////////////////////
// -----------------------sets------------------------
/*
const orderSet = new Set([
  "pasta",
  "pizza",
  "pizza",
  "risotto",
  "pasta",
  "pizza",
]);
console.log(...orderSet);
console.log(new Set("jonas"));
// get the size of the set

console.log(orderSet.size);

// lets check if a element if on set using has method
console.log(orderSet.has("pizza"));
// true
//  add element  to existing sets
orderSet.add("chechken tandori");
console.log(orderSet);

// out put
// Set(4) {'pasta', 'pizza', 'risotto', 'chechken tandori'}

// To delete an element from a set

orderSet.delete("risotto");
console.log(orderSet);

// output
// Set(3) {'pasta', 'pizza', 'chechken tandori'}

// loop over the set
for (const order of orderSet) console.log(order);

// output
// pasta
// pizza
// chechken tandori

// use case  to remove duplicate values from an array
const stuff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
// const stuffUnique = new Set(stuff);
// using spread operator store the set into an array
const stuffUnique = [...new Set(stuff)];
console.log(stuffUnique);
// output
// Set(3) {'waiter', 'chef', 'manager'}

// ///////////////////////////////////////////////////////////////////////////////////
// -------------------map--------------------------------------------
const rest = new Map();
rest.set("name", "classico italiano");
rest.set(1, "firenze , italy");
console.log(rest.set(2, "lisbon portugal"));

// output
// ["Italian", "Pizzeria", "Vegetarian", "Organic"],
rest
  .set("categories", '["Italian", "Pizzeria", "Vegetarian", "Organic"]')
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open ")
  .set(false, "we are closed");
console.log(rest);

const time = 24;
// console.log(rest.get(time > rest.set("open") && time < rest.get("close")));

// methods
console.log(rest.has("categories"));
rest.delete();
console.log(rest);
console.log(rest.size);

// acess key taht is an array that hold a values

const arr = [1, 2];
rest.set(arr, "test");
console.log(rest.get(arr));

// maped a dom element

rest.set(document.querySelector("h1"), "heading");
console.log(rest);

// creating map with out using .set methods
const question = new Map([
  ["question", " what is the best programming language in the world"],
  [1, "c"],
  [2, "java"],
  [3, "javascript"],
  ["correct", 3],
  [true, "correct"],
  [false, "try again"],
]);
console.log(question);

//  convert object to map

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get(question));
for (const [key, value] of question)
  if (typeof key === "number") console.log(`answer is ${key} : ${value}`);

const answer = Number(prompt("enetr your answer"));

console.log(question.get(question.get("correct") == answer));
*/
// //////////////////////////////////////////////////////////////////////////////
// codeing challange no3
/*Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL */

//   answer

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

// 1. Create an array 'events' of the different game events that happened (no
// duplicates)

const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
gameEvents.delete(64);

// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)

// console.log(`every event happend after ${90 / gameEvents.size} minutes`);

// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

for (const [key, values] of gameEvents) {
  const half = key > 45 ? "second half" : "fistst half";
  // console.log(` [${half}] ${key} :  ${values} `);
}
// ///////////////////////////////////////////////////////////////////////////
// string

const airLine = `tap air portugal`;
const palane = "a320";
console.log(palane[0]);
console.log(palane[2]);
console.log(palane[1]);

// length of the satring
console.log(airLine.length);
console.log("dhgasdfasdjgasddvadsf".length);

// last index and first index position of a particular elememnt
console.log(airLine.indexOf("r")); //7
console.log(airLine.lastIndexOf("r")); //11
//  how to slice a string from a given index number
// slice method
console.log(airLine.slice(4));

// air portugal

console.log(airLine.slice(4, 7)); //air

console.log(airLine.slice(0, airLine.indexOf(" "))); //tap
console.log(airLine.slice(airLine.lastIndexOf(" ") + 1)); //portugal
// slice from last
console.log(airLine.slice(-2)); //al
console.log(airLine.slice(1, -1)); //ap air portuga

// write a function that check weather it is a middele seat or not
// b and e are the middle seat
const checkMiddleSeat = function (seat) {
  seat.slice(-1) == "B" || seat.slice(-1) == "E"
    ? console.log(`It is amiddle seat and seat number is ${seat}`)
    : console.log(`It is not a middle seat seat number is ${seat}`);
};
checkMiddleSeat("11B");
checkMiddleSeat("11E");
checkMiddleSeat("11R");

// boxing
console.log(new String("sourav"));
console.log(typeof new String("sourav")); //object

// lower case and upper case

// fix capitalization of name
const passenger = "JOnas"; //Jonas
const passangerLowre = passenger.toLocaleLowerCase(); //jonas
const passangerCorrect =
  passangerLowre[0].toLocaleUpperCase() + passangerLowre.slice(1);
console.log(passangerCorrect); //Jonas

// compair emails
const emails = "hello@jonas.io";
const logInEmails = "    Hello@Jonas.IO   \n ";

// trim()

const normalEmails = logInEmails.trim().toLocaleLowerCase();
console.log(normalEmails); //hello@jonas.io
console.log(emails === normalEmails); //true

// replace a part of string

const priceGB = "288,97&";
const priceUS = priceGB.replace("&", "$").replace(",", ".");
console.log(priceUS); //288.97$

// replace entrie character
const announcement = "all passenger come to boarding door 23 ,boarding door 23";
console.log(announcement.replace("door", "gate"));
// all passenger come to boarding gate 23 ,boarding door 23
console.log(announcement.replaceAll("door", "gate"));
// all passenger come to boarding gate 23 ,boarding gate 23

// boolen
const plane = "Airbus A320neo";
console.log(plane.includes("A320")); //true
console.log(plane.startsWith("A320")); //false
console.log(plane.startsWith("Airbus")); //true

if (plane.startsWith("Airbus") && plane.endsWith("neo"))
  console.log("part of new airbus famaily");
// part of new airbus famaily

// split()
console.log("a+very+nice+string".split("+"));
// (4) ['a', 'very', 'nice', 'string']
console.log("sourav pramanik".split(" "));
// (2) ['sourav', 'pramanik']

const [firstName, lastName] = "sourav pramanik".split(" ");
console.log(firstName, lastName);
// sourav pramanik
// join
const newName = ["Mr.", firstName, lastName].join(" ");
console.log(newName); //Mr. sourav pramanik

// parctice with a function

const cap = function (name) {
  const names = name.toLocaleLowerCase().split(" ");
  const nameUpper = [];
  for (const n of names) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(" "));
};

cap("i am the king of debipur my name is sourav");
// I Am The King Of Debipur My Name Is Sourav

// padding
const message = "Go TO Gate 23!";
console.log(message.padStart(25, "+"));
// +++++++++++Go TO Gate 23!
console.log("sourav".padStart(23, "+"));
// +++++++++++++++++sourav

console.log(message.padStart(19, "+").padEnd(24, "+"));
// +++++Go TO Gate 23!+++++

// msak fo credit number
const maskCreditCard = function (number) {
  // const str = String(number);
  const str = number + "";
  const last = str.slice(-4);
  console.log(last.padStart(str.length, "*"));
};

maskCreditCard(546535312); //*****5312
maskCreditCard(4572515412151457215n);

// repeat

const message2 = "Deu to bad weather all train are deliyed";
console.log(message2.repeat(5));
