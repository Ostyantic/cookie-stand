'use strict'

console.log('hello world');

// An array of hours
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// constructor for Pat's Salmon Cookies Store
function Store(location, minCust, maxCust, avgCookieSale) {
  // object properties
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesSold = [];
  this.totalCookiesSold = 0;
};

// object methods being added to the Store constructor with the "prototype" function 

// method that calculates a random amount of customers that visit the shop
Store.prototype.randCust = function (min, max) {
  return min + Math.random() * (max - min);
};

// method that calculates a random amount of cookies purchased per hour.

// delcaring the object method as cookiesSoldPerHour
Store.prototype.cookiesSoldPerHour = function() {

  // for loop to iterate through the length of the hours array
  for (let i = 0; i < hours.length; i++) {

    // Assign the rounded down number value of the randCust method using the values of minCust and maxCust as arugments and then multiplied by the value of avgCookiesSale
    let cookieSale = Math.round(this.randCust(this.minCust, this.maxCust) * this.avgCookieSale);

    // pushes the value of cookieSale into the cookiesSold array
    this.cookiesSold.push(cookieSale);

    // adds the current iteration value of cookieSale to totalCookiesSold
    this.totalCookiesSold += cookieSale;
    // console.log(cookieSale);
  };
};

// method that renders cookieSoldPerHour rows and totalCookiesSold data on to table cells
Store.prototype.renderStoreCookies = function() {
  this.cookiesSoldPerHour();
  let storeData = document.getElementById('StoreData');
  let storeTR = document.createElement('tr');
  let storeTH = document.createElement('th');
  storeTH.textContent = this.location;
  storeTR.appendChild(storeTH);
  for (let i = 0; i < hours.length; i++) {
    let storeTD = document.createElement('td');
    storeTD.textContent = this.cookiesSold[i];
    storeTR.appendChild(storeTD);
  };
  let totalTD = document.createElement('td');
  totalTD.textContent = this.totalCookiesSold;
  storeTR.appendChild(totalTD);
  storeData.appendChild(storeTR);
};

// function that calculates and renders all stores total cookies sold per hour
function renderFranchiseTotalCookies() {

  // 1. declare a variable named table that selects the "tfoot element" as its value 
  // 2. delcare a variable named footTR and assigns it the value of the created table row element (tr)
  // 3. appends (aka adds) the child element (footTr) to the parent element (table)
  let table = document.querySelector('tfoot');
  let footTR = document.createElement('tr');
  table.appendChild(footTR);

  // 1. declare a variable named footTH and assigns it the value of the "th" element
  // 2. selects the text content within the footTH object and assigns the value of a template literal 
  // 3. appends (aka adds) the child element (footTH) to the parent element (footTR)
  let footTH = document.createElement('th');
  footTH.textContent = `Total`;
  footTR.appendChild(footTH);

  // declare a variable names totalCookies and assign it the value of 0, this will record the total cookier for all locations in the day
  let totalCookies = 0;

  // for loop to iterate through each hour
  for(let i = 0; i < hours.length; i++) {

    // declare a variable name hourlyTotal and assign it the value of 0, this will record the each locations total cookies per hour
    let hourlyTotal = 0;

    // for loop to iterate through each location during each hour iteration
    for (let j = 0; j < storeArr.length; j++) {
    
      // declare a variable named cellVal and assign it the value of the store at index j's cookiesSold at index i
      let cellVal = storeArr[j].cookiesSold[i];

      // reassigns and adds the value of cellVal to the hourlyTotal and totalCookies variables
      hourlyTotal += cellVal;
      totalCookies += cellVal;
    };

    // console.log(hourlyTotal);
    // 1. delcare a variable named footTD and assign it the value of a created "td" element
    // 2. fills the td element with the value contained within the hourlyTotal variable
    // 3. appends(aka adds) the child elemt(footTD) to the parent element(footTR)
    let footTD = document.createElement('td');
    footTD.textContent = hourlyTotal;
    footTR.appendChild(footTD);
  };

  // 1. delcare a variable named footTotal and assign it the value of a created "td" element
  // 2. fills the td element with the value contained within the totalCookie variable
  // 3. appends(aka adds) the child elemt(footTotal) to the parent element(footTR)
  let footTotal = document.createElement('td');
  footTotal.textContent = totalCookies;
  footTR.appendChild(footTotal);
  // console.log(totalCookies);
};

// creating store objects
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

// declare a variable named storeArr and assign it an array of store objects
let storeArr = [
  seattle,
  tokyo,
  dubai,
  paris,
  lima
];

// console logs of each store
console.log(seattle);
console.log(tokyo);
console.log(dubai);
console.log(paris);
console.log(lima);

// function named renderStoreData. When invoked, iterates through the arr parameter, each interation invokes the renderStoreCookies method at the current iteration index.
function renderStoreData(arr) {
  for(let i = 0; i < arr.length; i++) {
    arr[i].renderStoreCookies();
  };
};

// 1. invoke renderStoreData function using storeArr as the argument.
// 2. invoke renderFranchiseTotalCookies function
renderStoreData(storeArr);
renderFranchiseTotalCookies();