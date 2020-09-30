/*eslint-disable */
export function strDecorator(str, separator = ' ') {
    if (typeof str === 'number') {
    str += '';
    }
    const arr = str.split('');
    let strTemp = '';
    if (arr.length > 3) {
        for (let i = arr.length - 1, j = 1; i >= 0; i--, j++) {
            strTemp = arr[i] + strTemp;
            if (j % 3 === 0 && i !== 0) {
                strTemp = separator + strTemp;
            }
        }
    } else {
        return str;
    }
    return strTemp;
}