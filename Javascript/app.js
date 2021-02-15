'use strict';

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
        this.workbyHour = ['location', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
    }
    SlamonCookies.prototype.cusmerbyHour = function() {
        for (let i = 0; i < this.workbyHour.length - 1; i++) {
            this.cusmerbyHour1.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
        }
    }

    SlamonCookies.prototype.totalbyHour = function() {
        for (let i = 0; i < this.workbyHour.length - 1; i++) {
            this.totalbyHour1.push(Math.floor(this.averg * this.cusmerbyHour1[i]));
            this.total = this.total + this.averg[i];
        }
    }
    SlamonCookies.prototype.add = function() {
        let divElement = document.getElementById('storeinfo');
        let articleElement = document.createElement('article');
        divElement.appendChild(articleElement);
        let table = document.createElement('table');
        articleElement.appendChild(table);
        let trElement = document.createElement('tr');
        table.appendChild(trElement);
        for (let i = 0; i < this.workbyHour.length; i++) {
            let thElement = document.createElement('th');
            trElement.appendChild(thElement);
            thElement.textContent = this.workbyHour[i];
        }
    }
    SlamonCookies.prototype.row = function() {
            let divElement = document.getElementById('storeinfo');
            let articleElement = document.createElement('article');
            divElement.appendChild(articleElement);
            let table = document.createElement('table');
            articleElement.appendChild(table);
            let trElement1 = document.createElement('tr');
            table.appendChild(trElement1);
            let thElement1 = document.createElement('th');
            trElement1.appendChild(thElement1);
            thElement1.textContent = this.name;
            for (let i = 0; i < this.workbyHour.length; i++) {
                let thElement1 = document.createElement('th');
                trElement1.appendChild(thElement1);
                thElement1.textContent = this.cusmerbyHour1[i];
            }
        }
        // SlamonCookies.prototype.row1 = function() {
        //     let divElement = document.getElementById('storeinfo');
        //     let articleElement = document.createElement('article');
        //     divElement.appendChild(articleElement);
        //     let table = document.createElement('table');
        //     articleElement.appendChild(table);
        // let trElement2 = document.createElement('tr');
        // table.appendChild(trElement2);
        // for (let i = 0; i < 1; i++) {
        //     let trElement2 = document.createElement('tr');
        //     table.appendChild(trElement2);
        //     let thElement2 = document.createElement('th');
        //     trElement2.appendChild(thElement2);
        //     thElement2.textContent = this.name;
        // }
}
SlamonCookies.prototype.row2 = function() {
    let divElement = document.getElementById('storeinfo');
    let articleElement = document.createElement('article');
    divElement.appendChild(articleElement);
    let table = document.createElement('table');
    articleElement.appendChild(table);
    let trElement2 = document.createElement('tr');
    table.appendChild(trElement2);
    let thElement2 = document.createElement('th');
    trElement2.appendChild(thElement2);
    thElement2.textContent = this.totalbyHour1;
}
let Seattle = new SlamonCookies('Seattle', 23, 65, 6.3);
Seattle.headerhour();
Seattle.cusmerbyHour();
Seattle.totalbyHour();
Seattle.add();
// Seattle.row1();
Seattle.row();
// console.log(Seattle);
let Tokyo = new SlamonCookies('Tokyo', 3, 24, 1.2);
Tokyo.headerhour();
Tokyo.cusmerbyHour();
Tokyo.totalbyHour();
// Tokyo.row1();
Tokyo.row();
// console.log(Seattle);
let Dubai = new SlamonCookies('Dubai', 1, 38, 3.7);
Dubai.headerhour();
Dubai.cusmerbyHour();
Dubai.totalbyHour();
// Dubai.row1();
Dubai.row();
// console.log(Dubai);
let Paris = new SlamonCookies('Paris', 20, 38, 2.3);
Paris.headerhour();
Paris.cusmerbyHour();
Paris.totalbyHour();
// Paris.row1();
Paris.row();
// console.log(Paris);
let Lima = new SlamonCookies('Lima', 2, 16, 4.6);
Lima.headerhour();
Lima.cusmerbyHour();
Lima.totalbyHour();
// Lima.row1();
Lima.row();
Lima.row2();
// console.log(Paris);