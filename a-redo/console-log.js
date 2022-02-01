/*
COMMAND - console.log();

- used to print something on the console panel (in a brownser)
- in js, console.log function can log all sort of variables at a time, how many you wish for. there are no limits
for logging variables inside a console.log.
- worth to say that all strings must be surrounded by '' or "" quotes, we can also use `` quotes for more detailed
way of trowing logs into to console.
- objects and functions also can be returned.
- also template strings using `` quotes;

BESIDES console.log, THERE ARE OTHER FUNCTIONS RELATED AS console.clear(), etc;
*/

console.log('int number:', 123123);

console.log('float number', 123123.123123);

console.log('string:', 'Jay Jay');

function function1 () {
    return 'this is function 1';
}
console.log('function:', function1, function1());

class Obj {
    constructor (name, number) {
        this.name = name;
        this.number = number;
    }
}
const obj1 = new Obj('jay', 12);
console.log('object:', obj1);

const num1 = 12;
const name1 = 'jay';
console.log('template string:', `a number: ${num1} and a name: ${name1}.`);

console.log('all together:', 123123, 123123.123123, function1, function1(), obj1, `a number: ${num1} and a name: ${name1}.`);

// direct instantiation inside console.log();
console.log(new Obj('test', 1));
console.log((() => 1 + 3)());