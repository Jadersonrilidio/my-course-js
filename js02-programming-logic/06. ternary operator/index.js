// ? :

const userPoints = 999;

if (userPoints >= 1000) {
    console.log('Winner!');
} else {
    console.log('Loser.');
}

// ternary operator

userPoints >= 1000 ? console.log('Winner!') : console.log('Loser.');

// or

const userStatus = userPoints >= 1000 ? 'Winner!' : 'Loser.';
console.log(userStatus);