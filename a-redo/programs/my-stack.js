class Cell {
    constructor (content) {
        this.content = content;
        this.prev = null;
        this.next = null;
    };
}

class StackList {
    constructor () {
        this.first = null;
        this.last = null;
        this.size = 0;
    };

    addToStack (newCell) {
        if (this.first === null) {
            this.first = newCell;
            this.last = newCell;
            this.size += 1;
        } else {
        this.last.next = newCell;
        newCell.prev = this.last;
        this.last = newCell;
        this.size += 1;
        }
    };

    removeFromStack () {
        if (this.isEmpty()) return false;
        const lastCell = this.last;
        this.last = lastCell.prev;
        this.last.next = null;
        this.size -= 1;
        return lastCell;
    };

    isEmpty () {
        if (this.first === null) return true;
        return false;
    };

    contains (cellContent) {
        if (this.isEmpty()) return false;
        let cell = this.first;
        let counter = 0;
        do {
            counter++;
            if (cell.content == cellContent) return `Element ${cellContent} found on the index ${counter}`;
            cell = cell.next;
        } while (cell);
        return `Stack does not contain element ${cellContent} among its ${counter} elements.`;
    };

    clearStack () {
        this.first = null;
        this.last = null;
        this.size = 0;
        return true;
    };
    
    stackSize() {
        return this.size;
    };

    sortStack () {};
    getContentOf () {};
    printStack() {};
    arrayFromStack () {};
}

// TESTS ===============================================================================================

const stack1 = new StackList();

console.log(stack1.isEmpty());

stack1.addToStack(new Cell('jay cell'));

stack1.addToStack(new Cell(123));

stack1.addToStack(new Cell(123.567));

stack1.addToStack(new Cell("string here"));

stack1.addToStack(new Cell({ name: 'jay', surname: 'rods', age: 33, gender: 'male' }));

const obj1 = { smth: 'blablabla' }
stack1.addToStack(new Cell(obj1));

function cellContentFunction () {
    return 'a function inside a cell';
}
stack1.addToStack(new Cell(cellContentFunction));

stack1.addToStack(new Cell(cellContentFunction()));

stack1.addToStack(new Cell((a=1, b=1) => a + b));

stack1.addToStack(new Cell(class Person {
    constructor (name, surname, age, gender) {
        this.name = name; 
        this.surname = surname;
        this.age = age;
        this.gender = gender;
    }
    personInfo () {
        return `This person is ${this.name + ' ' + this.surname}. He/she is ${this.age} years old and ${this.gender}.`;
    }
}));

stack1.addToStack(new Cell('ordinary cell'));

console.log(stack1.isEmpty());

console.log(stack1.contains('ordinary cell'));
console.log(stack1.contains('SPECIAL CELL'));

console.log(stack1);
console.table(stack1);

console.log(stack1.removeFromStack());
console.log(stack1.removeFromStack());
console.log(stack1.removeFromStack());
console.log(stack1.removeFromStack());
console.log(stack1.removeFromStack());
console.log(stack1.removeFromStack());
console.log(stack1.removeFromStack());
console.log(stack1.removeFromStack());

console.log(stack1.isEmpty());

stack1.clearStack();

console.log(stack1.isEmpty());

