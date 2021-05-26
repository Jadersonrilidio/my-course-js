function* geradora1 () {
    yield 'valor1';
    yield 'valor2';
    yield 'valor3';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

const g11 = geradora1();
for (let valor of g11) {
    console.log(valor);
}

// contador infinito usando função geradora
function* geradora2 () {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);

function* geradora3 () {
    yield 0;
    yield 1;
    yield 2;
}
function* geradora4 () {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
}

function* geradora5 () {
    yield function () {
        console.log('vim do y1');
    };

    return function () {
        console.log('vim do return');
    };

    yield function () {
        console.log('vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1();
func2();
func3();

