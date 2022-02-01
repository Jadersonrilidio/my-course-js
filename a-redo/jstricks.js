// ***** HOW TO DEBUG JAVASCRIPT LIKE A PRO ***** //

// usefull methods for debuging and coding.

const p1 = { name: 'jay', age: 33, nervous: false };
const p2 = { name: 'luis', age: 43, nervous: false };
const p3 = { name: 'mirella', age: 20, nervous: false };
const p4 = { name: 'rodrigo', age: 25, nervous: true };

// Computed property names
console.log( { p1, p2, p3, p4 } );
// CSS formating console outputs
console.log('%c Extra Important Content:', 'color: orange; font-size: Bold');
// Computed property names in table format
console.table( { p1, p2, p3, p4 } );

const deleteMe = () => console.trace('Deleting Data');
deleteMe();
deleteMe();

console.time('looper');
setTimeout(() => {
    console.timeEnd('looper');
}, 2000);

// ============================================================================================

