'use strict'

console.log('hello world');

// An array of hours
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let storeArr = [];

// delcaring object

// Seattle
// let seattle = {

//   // object properties
//   location: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
//   cookiesSold: [],
//   totalCookiesSold: 0,

//   // method that calculate a random number of customers
//   randCust: function (min, max) {
//     return min + Math.random() * (max - min);
//   },
//   // *Math.round can be used to determine to decimal place**
//   // method that calculate random number of cookies sold per hour
//   cookiesSoldPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookieSale = Math.floor(this.randCust(this.minCust, this.maxCust) * this.avgCookieSale);
//       this.cookiesSold.push(cookieSale);
//       this.totalCookiesSold += cookieSale;
//       // console.log(cookieSale);
//     }
//   },

//   // method that renders cookiesSoldPerHour method on to webpage
//   renderStoreCookies: function () {
//     this.cookiesSoldPerHour();
//     let seattleCookies = document.getElementById('seattle');
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
//       seattleCookies.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total Cookies Sold: ${this.totalCookiesSold}`;
//     seattleCookies.appendChild(li);

//   },

//   // method that calculate total number of cookies sold for the day
// };
// console.log(seattle.totalCookiesSold);
// // invokes the renderStoreCookies method within the seattle object
// // seattle.renderStoreCookies();

// // Tokyo
// let tokyo = {

//   location: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
//   cookiesSold: [],
//   totalCookiesSold: 0,

//   randCust: function (min, max) {
//     return min + Math.random() * (max - min);
//   },

//   cookiesSoldPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookieSale = Math.floor(this.randCust(this.minCust, this.maxCust) * this.avgCookieSale);
//       this.cookiesSold.push(cookieSale);
//       this.totalCookiesSold += cookieSale;
//       // console.log(cookieSale);
//     }
//   },

//   renderStoreCookies: function () {
//     this.cookiesSoldPerHour();
//     let tokyoCookies = document.getElementById('tokyo');
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
//       tokyoCookies.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total Cookies Sold: ${this.totalCookiesSold}`;
//     tokyoCookies.appendChild(li);
//   }
// };

// // tokyo.renderStoreCookies();

// // Dubai

// let dubai = {

//   location: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   cookiesSold: [],
//   totalCookiesSold: 0,

//   randCust: function (min, max) {
//     return min + Math.random() * (max - min);
//   },

//   cookiesSoldPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookieSale = Math.floor(this.randCust(this.minCust, this.maxCust) * this.avgCookieSale);
//       this.cookiesSold.push(cookieSale);
//       this.totalCookiesSold += cookieSale;
//       // console.log(cookieSale);
//     }
//   },

//   renderStoreCookies: function () {
//     this.cookiesSoldPerHour();
//     let dubaiCookies = document.getElementById('dubai');
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
//       dubaiCookies.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total Cookies Sold: ${this.totalCookiesSold}`;
//     dubaiCookies.appendChild(li);
//   }
// };

// // dubai.renderStoreCookies();

// // Paris

// let paris = {

//   location: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//   cookiesSold: [],
//   totalCookiesSold: 0,

//   randCust: function (min, max) {
//     return min + Math.random() * (max - min);
//   },

//   cookiesSoldPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookieSale = Math.floor(this.randCust(this.minCust, this.maxCust) * this.avgCookieSale);
//       this.cookiesSold.push(cookieSale);
//       this.totalCookiesSold += cookieSale;
//       // console.log(cookieSale);
//     }
//   },

//   renderStoreCookies: function () {
//     this.cookiesSoldPerHour();
//     let parisCookies = document.getElementById('paris');
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
//       parisCookies.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total Cookies Sold: ${this.totalCookiesSold}`;
//     parisCookies.appendChild(li);
//   }
// };

// // paris.renderStoreCookies();

// // Lima

// let lima = {

//   location: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
//   cookiesSold: [],
//   totalCookiesSold: 0,

//   randCust: function (min, max) {
//     return min + Math.random() * (max - min);
//   },

//   cookiesSoldPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookieSale = Math.floor(this.randCust(this.minCust, this.maxCust) * this.avgCookieSale);
//       this.cookiesSold.push(cookieSale);
//       this.totalCookiesSold += cookieSale;
//       // console.log(cookieSale);
//     }
//   },

//   renderStoreCookies: function () {
//     this.cookiesSoldPerHour();
//     let limaCookies = document.getElementById('lima');
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
//       limaCookies.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total Cookies Sold: ${this.totalCookiesSold}`;
//     limaCookies.appendChild(li);
//   }
// };

// lima.renderStoreCookies();

// constructor for Pat's Salmon Cookies Store
function Store(location, minCust, maxCust, avgCookieSale) {
  // object properties
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesSold = [];
  this.totalCookiesSold = 0;
  storeArr.push(this);
};

// object methods being added to the Store constructor with the function "prototype"

// method that calculates a random amount of customers that visit the shop
Store.prototype.randCust = function (min, max) {
  return min + Math.random() * (max - min);
};

// method that calculates a random amount of cookies purchased per hour.

// delcaring the object method as cookiesSoldPerHour
Store.prototype.cookiesSoldPerHour = function () {

  // for loop to iterate through the length of the hours array
  for (let i = 0; i < hours.length; i++) {

    // Assign the rounded down number value of the randCust method using the values of minCust and maxCust as arugments and then multiplied by the value of avgCookiesSale
    let cookieSale = Math.round(this.randCust(this.minCust, this.maxCust) * this.avgCookieSale);

    // pushes the value of cookieSale into the cookiesSold array
    this.cookiesSold.push(cookieSale);

    // adds the current iteration value of cookieSale to totalCookiesSold
    this.totalCookiesSold += cookieSale;
    // console.log(cookieSale);
  }
};

// method that renders cookieSoldPerHour rows and totalCookiesSold data into table cells
Store.prototype.renderStoreCookies = function() {
  this.cookiesSoldPerHour();
  let storeCookies = document.getElementById('StoreData');
  let storeTR = document.createElement('tr');
  let storeTH = document.createElement('th');
  storeTH.textContent = this.location;
  storeTR.appendChild(storeTH);
  for (let i = 0; i < hours.length; i++) {
    let storeTD = document.createElement('td');
    storeTD.textContent = `${this.cookiesSold[i]}`;
    storeTR.appendChild(storeTD);
  }
  let totalTD = document.createElement('td');
  totalTD.textContent = `${this.totalCookiesSold}`;
  storeTR.appendChild(totalTD);
  storeCookies.appendChild(storeTR);
};

// function that calculates and renders all stores total cookies sold per hour
let renderFranchiseTotalCookies = function() {

  // 1. declare a variable named table that selects the "tfoot element" as its value 
  // 2. delcare a variable named footTR and assigns it the value of the created table row element (tr)
  // 3. appends (aka adds) the child element (footTr) to the parent element (table)
  let table = document.querySelector('tfoot');
  let footTR = document.createElement('tr');
  table.appendChild(footTR);

  // 1. declare a variable named footTH and assigns it the value of the "th" element
  // 2. selects the text content within the footTH object and assigns the value of a template literal 
  // appends (aka adds) the child element (footTH) to the parent element (footTR)
  let footTH = document.createElement('th');
  footTH.textContent = `Total`;
  footTR.appendChild(footTH);

  let totalCookies = 0;

  for(let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for ( let j = 0; j < storeArr.length; j++) {
      let cellVal = storeArr[j].cookiesSold[i];
      hourlyTotal += cellVal;
      totalCookies += cellVal;
    }
    // console.log(hourlyTotal);
    let footTD = document.createElement('td');
    footTD.textContent = hourlyTotal;
    footTR.appendChild(footTD);
  };
  
  let footTotal = document.createElement('td');
  footTotal.textContent = totalCookies;
  footTR.appendChild(footTotal);
  // console.log(totalCookies);
};




// creating store objects

let storeOne = new Store('Seattle', 23, 65, 6.3);
let storeTwo = new Store('Tokyo', 3, 24, 1.2);
let storeThree = new Store('Dubai', 11, 38, 3.7);
let storeFour = new Store('Paris', 20, 38, 2.3);
let storeFive = new Store('Lima', 2, 16, 4.6);

// console.log(storeOne);
// console.log(storeTwo);
// console.log(storeThree);
// console.log(storeFour);
// console.log(storeFive);

storeOne.renderStoreCookies();
storeTwo.renderStoreCookies();
storeThree.renderStoreCookies();
storeFour.renderStoreCookies();
storeFive.renderStoreCookies();

renderFranchiseTotalCookies();