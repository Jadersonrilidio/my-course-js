/*
- upload the script tag inside <head> could lead the user to wait a longer time until all the script is loaded,
further only loading the page itself.
- it better be inserted into <body>
*/
console.log('Hello world');
console.log('this string will be shown on the brownser console');