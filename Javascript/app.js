'use strict';

function randomValue(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function SlamonCookies(name, min, max, averg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.averg = averg;
    this.workbyHour = [];
    this.cusmerbyHour1 = [];
    this.totalbyHour1 = [];
    this.total = 0;

    SlamonCookies.prototype.headerhour = function() {
        this.workbyHour = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
    }
    SlamonCookies.prototype.cusmerbyHour = function() {
        for (let i = 0; i < this.workbyHour.length; i++) {
            this.cusmerbyHour1.push(randomValue(this.max, this.min) * Math.ceil(this.min));
            this.total = this.total + this.cusmerbyHour1[i];
        }
    }

    SlamonCookies.prototype.totalbyHour = function() {
        for (let i = 0; i < this.workbyHour.length; i++) {
            this.totalbyHour1.push(Math.floor(this.averg * this.cusmerbyHour1[i]));
            this.total = this.total + this.averg[i];
        }
    }
    SlamonCookies.prototype.body = function() {
        let divElement = document.getElementById('storeinfo');
        let articleElement = document.createElement('article');
        divElement.appendChild(articleElement);
        let table = document.createElement('table');
        articleElement.appendChild(table);
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
        let divElement = document.getElementById('storeinfo');
        let articleElement = document.createElement('article');
        divElement.appendChild(articleElement);
        let table = document.createElement('table');
        articleElement.appendChild(table);
        let trElement = document.createElement('tr');
        table.appendChild(trElement);
        let tdElement = document.createElement('th');
        trElement.appendChild(tdElement);
        tdElement.textContent = this.name;
        for (let i = 0; i < this.workbyHour.length; i++) {
            let tdElement = document.createElement('th');
            trElement.appendChild(tdElement);
            tdElement.textContent = this.cusmerbyHour1[i];
        }
    }
}
SlamonCookies.prototype.footer = function() {
    let divElement = document.getElementById('storeinfo');
    let articleElement = document.createElement('article');
    divElement.appendChild(articleElement);
    let table = document.createElement('table');
    articleElement.appendChild(table);
    let trElement = document.createElement('tr');
    table.appendChild(trElement);
    let tdElement = document.createElement('th');
    trElement.appendChild(tdElement);
    tdElement.textContent = 'total';
    for (let i = 0; i < this.workbyHour.length; i++) {
        let tdElement = document.createElement('th');
        trElement.appendChild(tdElement);
        tdElement.textContent = this.totalbyHour1[i];
    }
}
let Seattle = new SlamonCookies('Seattle', 23, 65, 6.3);
Seattle.headerhour();
Seattle.cusmerbyHour();
Seattle.totalbyHour();
Seattle.body();
Seattle.row();
// console.log(Seattle);
let Tokyo = new SlamonCookies('Tokyo', 3, 24, 1.2);
Tokyo.headerhour();
Tokyo.cusmerbyHour();
Tokyo.totalbyHour();
Tokyo.row();
let Dubai = new SlamonCookies('Dubai', 1, 38, 3.7);
Dubai.headerhour();
Dubai.cusmerbyHour();
Dubai.totalbyHour();
Dubai.row();
let Paris = new SlamonCookies('Paris', 20, 38, 2.3);
Paris.headerhour();
Paris.cusmerbyHour();
Paris.totalbyHour();
Paris.row();
let Lima = new SlamonCookies('Lima', 2, 16, 4.6);
Lima.headerhour();
Lima.cusmerbyHour();
Lima.totalbyHour();
Lima.row();
Lima.footer();