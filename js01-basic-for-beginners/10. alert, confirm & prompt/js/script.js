/*

Window => is an object of the browser, the main window.

window.alert(); shows a message in a pop up-like window - has no return (undefined)
window.confirm(); shows a confirm window with buttons cancel and okay - return boolean
window.prompt(); shows a window with text field to type smth - return a string with the text typed.
*/

let num1 = prompt('digite um número');
let num2 = prompt('digite outor número');

num1 = Number(num1);
num2 = Number(num2);

const result = num1 + num2

alert('O resultado foi ' + result);
