/*eslint-disable */
export function formatToNumber(str, separator = '') {
    const result = str.replaceAll(separator, '');
    return +result;
}