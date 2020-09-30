/*eslint-disable */

import {formatToNumber} from "./format";

export function collectionToArray(htmlCollection) {
    const htmlElements = [...htmlCollection];
    const array = [];

    htmlElements.forEach((value) => {
        const salaryStr = value.dataset.salary;
        array.push({
            position: value.dataset.position,
            salaryStr,
            salary: formatToNumber(salaryStr.substring(1), ','),
            age: value.dataset.age,
            name: value.innerText,
        })
    });

    return array;
}