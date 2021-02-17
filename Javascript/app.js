'use strict';
let newArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function randomValue(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min);
}

let divElement = document.getElementById('storeinfo');
let table = document.createElement('table');
divElement.appendChild(table);

function SlamonCookies(name, min, max, averg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.averg = averg;
    this.workbyHour = [];
    this.cusmerbyHour1 = [];
    this.totalbyHour1 = [];
    this.total1 = new Array();
    this.total = 0;
    this.total2 = 0;
}


SlamonCookies.prototype.headerHour = function() {
    this.workbyHour = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
}

SlamonCookies.prototype.cusmerbyHour = function() {
    for (let i = 0; i < this.workbyHour.length; i++) {
        this.total1.push(randomValue(this.min, this.max) * Math.ceil(this.averg));
        this.total = this.total + this.total1[i];
    }
    this.total1[this.total1.length] = this.total;
}

SlamonCookies.prototype.totalbyHour = function() {
    for (let i = 0; i < this.workbyHour.length; i++) {
        newArray[i] = newArray[i] + this.total1[i];
    }
}

// SlamonCookies.prototype.cusmerbyHour = function() {
//     for (let i = 0; i < this.workbyHour.length; i++) {
//         this.cusmerbyHour1.push(randomValue(this.max, this.min) * Math.ceil(this.min));
//         this.cusmerbyHour1[i] = this.cusmerbyHour1[i] + this.total;

//     }
// }

// SlamonCookies.prototype.totalbyHour = function() {
//     for (let i = 0; i < this.workbyHour.length; i++) {
//         this.totalbyHour1.push(Math.floor(this.averg * this.cusmerbyHour1[i]));
//         this.total = this.total + this.totalbyHour1[i];

//     }

// }

SlamonCookies.prototype.body = function() {
    let trElement = document.createElement('tr');
    table.appendChild(trElement);
    let thElement = document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent = 'location';
    for (let i = 0; i < this.workbyHour.length; i++) {
        let thElement = document.createElement('th');
        trElement.appendChild(thElement);
        thElement.textContent = this.workbyHour[i];
    }
    let thElement1 = document.createElement('th');
    trElement.appendChild(thElement1);
    thElement1.textContent = 'Daily Location Total';
}

SlamonCookies.prototype.row = function() {
    let trElement = document.createElement('tr');
    table.appendChild(trElement);
    let tdElement = document.createElement('th');
    trElement.appendChild(tdElement);
    tdElement.textContent = this.name;
    for (let i = 0; i < this.total1.length; i++) {
        let tdElement = document.createElement('th');
        trElement.appendChild(tdElement);
        tdElement.textContent = this.total1[i];
    }
}

SlamonCookies.prototype.footer = function() {
    let trElement = document.createElement('tr');
    table.appendChild(trElement);
    let tdElement = document.createElement('th');
    trElement.appendChild(tdElement);
    tdElement.textContent = 'total';
    for (let i = 0; i < newArray.length; i++) {
        let tdElement = document.createElement('th');
        trElement.appendChild(tdElement);
        tdElement.textContent = newArray[i];
    }

}

let Seattle = new SlamonCookies('Seattle', 23, 65, 6.3);
Seattle.headerHour();
Seattle.cusmerbyHour();
Seattle.totalbyHour();
Seattle.body();
Seattle.row();
// console.log(Seattle);
let Tokyo = new SlamonCookies('Tokyo', 3, 24, 1.2);
Tokyo.headerHour();
Tokyo.cusmerbyHour();
Tokyo.totalbyHour();
Tokyo.row();
let Dubai = new SlamonCookies('Dubai', 1, 38, 3.7);
Dubai.headerHour();
Dubai.cusmerbyHour();
Dubai.totalbyHour();
Dubai.row();
let Paris = new SlamonCookies('Paris', 20, 38, 2.3);
Paris.headerHour();
Paris.cusmerbyHour();
Paris.totalbyHour();
Paris.row();
let Lima = new SlamonCookies('Lima', 2, 16, 4.6);
Lima.headerHour();
Lima.cusmerbyHour();
Lima.totalbyHour();
Lima.row();

let form = document.getElementById('user');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const namefile = event.target.name1.value;
    // console.log(namefile);
    const mincont = event.target.number1.value;
    const maxcont = event.target.number2.value;
    const averagcont = event.target.number3.value;
    let inputUser = new SlamonCookies(namefile, mincont, maxcont, averagcont);
    inputUser.headerHour();
    inputUser.cusmerbyHour();
    inputUser.totalbyHour();
    inputUser.row();
    inputUser.footer();
});