'use strict'

console.log('hello world');

// An array of hours
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// delcaring object

// Seattle
let seattle = {

  // object properties
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  cookiesSold: [],

  //method that calculate a random number of customers
  randCust: function (min, max) {
    return min + Math.random() * (max - min);
  },

  //method that calculate random number of cookies sold per hour
  cookiesSoldPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieSale = Math.floor(this.randCust(this.minCust, this.maxCust) * this.avgCookieSale);
      this.cookiesSold.push(cookieSale);
      // console.log(cookieSale);
    }
  },

  // method that renders cookiesSoldPerHour method on to webpage
  render: function () {
    this.cookiesSoldPerHour();
    let limaCookies = document.getElementById('seattle');
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
      limaCookies.appendChild(li);
    }
  }
}

//invokes the render method within the seattle object
seattle.render();

// Tokyo
let tokyo = {

  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  cookiesSold: [],

  randCust: function (min, max) {
    return min + Math.random() * (max - min);
  },

  cookiesSoldPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieSale = Math.floor(this.randCust(this.minCust, this.maxCust) * this.avgCookieSale);
      this.cookiesSold.push(cookieSale);
      // console.log(cookieSale);
    }
  },

  render: function () {
    this.cookiesSoldPerHour();
    let limaCookies = document.getElementById('tokyo');
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
      limaCookies.appendChild(li);
    }
  }
}

tokyo.render();

// Dubai

let dubai = {

  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  cookiesSold: [],

  randCust: function (min, max) {
    return min + Math.random() * (max - min);
  },

  cookiesSoldPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieSale = Math.floor(this.randCust(this.minCust, this.maxCust) * this.avgCookieSale);
      this.cookiesSold.push(cookieSale);
      // console.log(cookieSale);
    }
  },

  render: function () {
    this.cookiesSoldPerHour();
    let limaCookies = document.getElementById('dubai');
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
      limaCookies.appendChild(li);
    }
  }
}

dubai.render();

// Paris

let paris = {

  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  cookiesSold: [],

  randCust: function (min, max) {
    return min + Math.random() * (max - min);
  },

  cookiesSoldPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieSale = Math.floor(this.randCust(this.minCust, this.maxCust) * this.avgCookieSale);
      this.cookiesSold.push(cookieSale);
      // console.log(cookieSale);
    }
  },

  render: function () {
    this.cookiesSoldPerHour();
    let limaCookies = document.getElementById('paris');
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
      limaCookies.appendChild(li);
    }
  }
}

paris.render();

// Lima

let lima = {

  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  cookiesSold: [],

  randCust: function (min, max) {
    return min + Math.random() * (max - min);
  },

  cookiesSoldPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookieSale = Math.floor(this.randCust(this.minCust, this.maxCust) * this.avgCookieSale);
      this.cookiesSold.push(cookieSale);
      // console.log(cookieSale);
    }
  },

  render: function () {
    this.cookiesSoldPerHour();
    let limaCookies = document.getElementById('lima');
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]}: ${this.cookiesSold[i]}`;
      limaCookies.appendChild(li);
    }
  }
}

lima.render();
