function createMultiplier (multiplier) {
    return function (n) {
        return n * multiplier;
    };
}

const duplicate = createMultiplier(2);
const triplicate = createMultiplier(3);
const quadruplicate = createMultiplier(4);

console.log(duplicate(2));
console.log(triplicate(2));
console.log(quadruplicate(2));