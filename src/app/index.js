import './assets/styles/main.css';

import { formatToNumber } from './modules/format';
import { strDecorator } from './modules/str_format';
import { collectionToArray } from './modules/html_collection_decoder';

const totalPopulationEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');
const populationEl = document.querySelectorAll('.population');

const resultTotal = document.querySelector('.total-population blue');

console.log(resultTotal);

const honorDesk = {
  name: document.querySelector('#name'),
  salaryStr: document.querySelector('#salary'),
  age: document.querySelector('#age'),
  position: document.querySelector('#position'),
};

const workersArr = document.querySelector('.workers').children;
const honorable = collectionToArray(workersArr);
const topWorker = honorable.reduce((prev, curr) => (curr.salary > prev.salary ? curr : prev));

const populationArr = Array.from(populationEl);
const populationNumbers = populationArr.map((val) => formatToNumber(val.innerText, ','));
const population = populationNumbers.reduce((prev, curr) => prev + curr, 0);
const average = population / populationNumbers.length;

totalPopulationEl.innerText = strDecorator(population);
averageEl.innerText = strDecorator(average);

Object.keys(honorDesk).forEach((key) => {
  honorDesk[key].innerText = topWorker[key];
});
