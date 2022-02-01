  // ***** DATE OBJECT *****

// date object is a constructor function

// ================================================================================

const umMinuto = 60 * 1000;
const umaHora = 60 * 60 * 1000;
const umDia = 24 * 60 * 60 * 1000;
const umAno = 365 * 24 * 60 * 60 * 1000; // um ano exato seria diferente, mas por motivos didáticos...

const date1 = new Date(); // no parameters generate the current date in miliseconds
console.log(date1);
console.log(date1.toString());

const zeroDate = new Date(0); // 01/01/1970 Timestamp UNIX - Thu Jan 01 1970 00:00:00 GMT-0300 (UTC Standard Time)
console.log(zeroDate.toString());

// if I omit, the default 00 will take place for miliseconds, seconds, minutes and hours
const date2 = new Date('year', 'month-1', 'day', 'hours', 'minutes', 'seconds', 'miliseconds');
const date3 = new Date(2021, 11, 31, 23, 59, 59, 999);
console.log(date3.toString());

const date4 = new Date('2021-12-31 23:59:59.999');
console.log(date4.toString());

// ================================================================================
const date5 = new Date();
console.log(`
    ${date5};
`);
console.log(`
    Day:            ${date5.getDate()}
    WeekDay:        ${date5.getDay()}
    Month:          ${date5.getMonth()}
    Year:           ${date5.getFullYear()}
    Hour:           ${date5.getHours()}
    Minutes:        ${date5.getMinutes()}
    Seconds:        ${date5.getSeconds()}
    Miliseconds:    ${date5.getMilliseconds()}
`);
console.log(`
    UTC Day:            ${date5.getUTCDate()}
    UTC WeekDay:        ${date5.getUTCDay()}
    UTC Month:          ${date5.getUTCMonth()}
    UTC Year:           ${date5.getUTCFullYear()}
    UTC Hour:           ${date5.getUTCHours()}
    UTC Minutes:        ${date5.getUTCMinutes()}
    UTC Seconds:        ${date5.getUTCSeconds()}
    UTC Miliseconds:    ${date5.getUTCMilliseconds()}
`);
console.log(`
    toDateString():         ${date5.toDateString()}
    toISOString():          ${date5.toISOString()}
    toJSON():               ${date5.toJSON()}
    toString():             ${date5.toString()}
    toTimeString():         ${date5.toTimeString()}
    valueOf():              ${date5.valueOf()}
    getTime():              ${date5.getTime()}
    getTimeZoneOffset():    ${date5.getTimezoneOffset()}
    getVarDate:             ${date5.getVarDate}
    toLocaleDateString():   ${date5.toLocaleDateString()}
    toLocaleString():       ${date5.toLocaleString()}
    toLocaleTimeString():   ${date5.toLocaleTimeString()}
`);
console.log(typeof date5);
console.log(date5 instanceof Date);

console.log('Function Date.now(): ', Date.now());

// ================================================================================

// function to add a zero on the left of a number (if needed) and return it as string type
function zeroToLeft (number) {
    return number >= 10 ? number : `0${number}`;
}
const zeroToLeft2 = num => num >= 10 ? num : `0${num}`;

console.log(zeroToLeft(date5.getDate()), zeroToLeft2(date5.getDate()));

// ================================================================================

const date6 = new Date();
console.log(date6.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'}));