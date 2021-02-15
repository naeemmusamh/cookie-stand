'use strict';

let workbyhour = ['6AM:', '7AM:', '8AM:', '9AM:', '10AM:', '11AM:', '12AM:', '1PM:', '2PM:', '3PM:', '4PM:', '5PM:', '6PM:', '7PM:'];
let seattle = {
    header: 'cookies sales by hour for location',
    name: 'seattle',
    parag: 'parag',
    cust: [],
    averg: [],
    total: 0,

    cust1: function(max, min) {
        for (let i = 0; i < workbyhour.length; i++) {
            this.cust.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
    },

    cust2: function(averg1) {
        for (let i = 0; i < workbyhour.length; i++) {
            this.averg.push(Math.floor(averg1 * this.cust[i]));
            this.total = this.total + this.averg[i]
        }
    },

    add: function() {
        let divElement = document.getElementById('storeinfo');
        let articleElement = document.createElement('article');
        divElement.appendChild(articleElement);
        let header1 = document.createElement('h1');
        articleElement.appendChild(header1);
        header1.textContent = this.header;
        let header2 = document.createElement('h3');
        articleElement.appendChild(header2);
        header2.textContent = this.name;
        let paragraph1 = document.createElement('p');
        articleElement.appendChild(paragraph1);
        paragraph1.textContent = '-------' + 'hour' + '------' + 'number cookies';
        let ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement)

        for (let i = 0; i < workbyhour.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = workbyhour[i] + ' ' + this.averg[i] + 'cookies';
        }
        let paragraph2 = document.createElement('p');
        articleElement.appendChild(paragraph2);
        paragraph2.textContent = 'Total' + ' : ' + this.total + 'cookies';
    }
}
seattle.cust1(23, 65);
seattle.cust2(6.3);
seattle.add();
// console.log(seattle);


let Tokyo = {
    header: 'cookies sales by hour for location',
    name: 'Tokyo',
    parag: 'parag',
    cust: [],
    averg: [],
    total: 0,

    cust1: function(max, min) {
        for (let i = 0; i < workbyhour.length; i++) {
            this.cust.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
    },

    cust2: function(averg1) {
        for (let i = 0; i < workbyhour.length; i++) {
            this.averg.push(Math.floor(averg1 * this.cust[i]));
            this.total = this.total + this.averg[i]
        }
    },

    add: function() {
        let divElement = document.getElementById('storeinfo');
        let articleElement = document.createElement('article');
        divElement.appendChild(articleElement);
        let header1 = document.createElement('h1');
        articleElement.appendChild(header1);
        header1.textContent = this.header;
        let header2 = document.createElement('h3');
        articleElement.appendChild(header2);
        header2.textContent = this.name;
        let paragraph1 = document.createElement('p');
        articleElement.appendChild(paragraph1);
        paragraph1.textContent = '-------' + 'hour' + '------' + 'number cookies';
        let ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement)

        for (let i = 0; i < workbyhour.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = workbyhour[i] + ' ' + this.averg[i] + 'cookies';
        }
        let paragraph2 = document.createElement('p');
        articleElement.appendChild(paragraph2);
        paragraph2.textContent = 'Total' + ' : ' + this.total + 'cookies';
    }
}
Tokyo.cust1(3, 24);
Tokyo.cust2(1.2);
Tokyo.add();
// console.log(seattle);

let Dubai = {
    header: 'cookies sales by hour for location',
    name: 'Dubai',
    parag: 'parag',
    cust: [],
    averg: [],
    total: 0,

    cust1: function(max, min) {
        for (let i = 0; i < workbyhour.length; i++) {
            this.cust.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
    },

    cust2: function(averg1) {
        for (let i = 0; i < workbyhour.length; i++) {
            this.averg.push(Math.floor(averg1 * this.cust[i]));
            this.total = this.total + this.averg[i]
        }
    },

    add: function() {
        let divElement = document.getElementById('storeinfo');
        let articleElement = document.createElement('article');
        divElement.appendChild(articleElement);
        let header1 = document.createElement('h1');
        articleElement.appendChild(header1);
        header1.textContent = this.header;
        let header2 = document.createElement('h3');
        articleElement.appendChild(header2);
        header2.textContent = this.name;
        let paragraph1 = document.createElement('p');
        articleElement.appendChild(paragraph1);
        paragraph1.textContent = '-------' + 'hour' + '------' + 'number cookies';
        let ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement)

        for (let i = 0; i < workbyhour.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = workbyhour[i] + ' ' + this.averg[i] + 'cookies';
        }
        let paragraph2 = document.createElement('p');
        articleElement.appendChild(paragraph2);
        paragraph2.textContent = 'Total' + ' : ' + this.total + 'cookies';
    }
}
Dubai.cust1(3, 24);
Dubai.cust2(3.7);
Dubai.add();
// console.log(seattle);

let Paris = {
    header: 'cookies sales by hour for location',
    name: 'Paris',
    parag: 'parag',
    cust: [],
    averg: [],
    total: 0,

    cust1: function(max, min) {
        for (let i = 0; i < workbyhour.length; i++) {
            this.cust.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
    },

    cust2: function(averg1) {
        for (let i = 0; i < workbyhour.length; i++) {
            this.averg.push(Math.floor(averg1 * this.cust[i]));
            this.total = this.total + this.averg[i]
        }
    },

    add: function() {
        let divElement = document.getElementById('storeinfo');
        let articleElement = document.createElement('article');
        divElement.appendChild(articleElement);
        let header1 = document.createElement('h1');
        articleElement.appendChild(header1);
        header1.textContent = this.header;
        let header2 = document.createElement('h3');
        articleElement.appendChild(header2);
        header2.textContent = this.name;
        let paragraph1 = document.createElement('p');
        articleElement.appendChild(paragraph1);
        paragraph1.textContent = '-------' + 'hour' + '------' + 'number cookies';
        let ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement)

        for (let i = 0; i < workbyhour.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = workbyhour[i] + ' ' + this.averg[i] + 'cookies';
        }
        let paragraph2 = document.createElement('p');
        articleElement.appendChild(paragraph2);
        paragraph2.textContent = 'Total' + ' : ' + this.total + 'cookies';
    }
}
Paris.cust1(20, 38);
Paris.cust2(2.3);
Paris.add();
// console.log(seattle);

let Lima = {
    header: 'cookies sales by hour for location',
    name: 'Lima',
    parag: 'parag',
    cust: [],
    averg: [],
    total: 0,

    cust1: function(max, min) {
        for (let i = 0; i < workbyhour.length; i++) {
            this.cust.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
    },

    cust2: function(averg1) {
        for (let i = 0; i < workbyhour.length; i++) {
            this.averg.push(Math.floor(averg1 * this.cust[i]));
            this.total = this.total + this.averg[i]
        }
    },

    add: function() {
        let divElement = document.getElementById('storeinfo');
        let articleElement = document.createElement('article');
        divElement.appendChild(articleElement);
        let header1 = document.createElement('h1');
        articleElement.appendChild(header1);
        header1.textContent = this.header;
        let header2 = document.createElement('h3');
        articleElement.appendChild(header2);
        header2.textContent = this.name;
        let paragraph1 = document.createElement('p');
        articleElement.appendChild(paragraph1);
        paragraph1.textContent = '-------' + 'hour' + '------' + 'number cookies';
        let ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement)

        for (let i = 0; i < workbyhour.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = workbyhour[i] + ' ' + this.averg[i] + 'cookies';
        }
        let paragraph2 = document.createElement('p');
        articleElement.appendChild(paragraph2);
        paragraph2.textContent = 'Total' + ' : ' + this.total + 'cookies';
    }
}
Lima.cust1(23, 65);
Lima.cust2(6.3);
Lima.add();
// console.log(seattle);