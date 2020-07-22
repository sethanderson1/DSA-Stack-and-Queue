// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
// stack class 

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    // O(1)
    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    // O(1)
    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    peek() {
        if (!this.top) {
            this.isEmpty();
            return;
        }
        console.log('this.top.value', (this.top.value))
        return this.top.value;
    }

    isEmpty() {
        if (!this.top) {
            return true;
        } else {
            return false;
        }
    }

    display() {
        let node = this.top;
        while (node !== null) {
            console.log('node', node)
            node = node.next;
        }
    }

    printStack() {
        if (!this.top) {
            return null;
        }

        let currentNode = this.top;
        while (currentNode) {
            console.log(currentNode);
            currentNode = currentNode.next;
        }
    }


}







const starTrek = new Stack();

starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

console.log('starTrek', starTrek)

// remove mccoy

starTrek.pop('Kirk');
starTrek.pop('Spock');
starTrek.pop('McCoy');

console.log('starTrek', starTrek)



// palindrome


function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    if (s.length < 3) {
        return false;
    }
    // Your code goes here
    const strStack = new Stack();
    for (let i = 0; i < s.length; i++) {
        strStack.push(s[i]);
    }
    let reverseString = '';
    while (!strStack.isEmpty()) {
        reverseString += strStack.pop();
    }
    if (s === reverseString) {
        return true;
    } else {
        return false;
    }

}

// True, true, true, false
console.log(is_palindrome('dad'));
console.log(is_palindrome('A man, a plan, a canal: Panama'));
console.log(is_palindrome('1001'));
console.log(is_palindrome('Tauhida'));

// Matching parentheses in an expression

const parser = expression => {
    const parseExp = new Stack();
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    // loops through input expression and places everything into stack
    // assigning them to character key -- each letter/symbol
    // and providing an index
    for (let char in expression) {
        if (
            expression[char] === '(' ||
            expression[char] === '[' ||
            expression[char] === '{'
        ) {
            parseExp.push({
                character: expression[char]
            });
        }

        // if stack is empty,
        if (parseExp.isEmpty()) {
            if (expression[char] === ')') {
                console.log(`Missing '(' after character index ${char}`);
                return false;
            }
            if (expression[char] === ']') {
                console.log(`Missing '[' after character index ${char}`);
                return false;
            }
            if (expression[char] === '}') {
                console.log(`Missing '{' after character index ${char}`);
                return false;
            }
        }

        if (
            expression[char] === ')' ||
            expression[char] === ']' ||
            expression[char] === '}'
        ) {
            let priorChar = parseExp.pop();
            if (expression[char] !== map[priorChar.character]) {
                console.log(
                    `Expecting a ${map[priorChar.character]} but received a ${
                    expression[char]
                    }`
                );
                return false;
            }
        }
    }
    if (parseExp.isEmpty()) {
        return true;
    }
    console.log(
        `Holding an open ${parseExp.top.data.character} after character index ${parseExp.top.data.index}`
    );
    return false;
};


// sort stack

function sort(stack) {
    let resultStack = new Stack();
    while (stack.top) {
        let stackTop = stack.pop();

        while (resultStack.top && resultStack.top.value < stackTop) {
            stack.push(resultStack.pop());
        }
        resultStack.push(stackTop);
    }
    return resultStack.printStack();
}



let testStack = new Stack();

testStack.push("2");
testStack.push("1");
testStack.push("3");
testStack.push("555");
testStack.push("3333");

console.log('sort(testStack)', sort(testStack))





// // Creates a node containing the data and a reference to the next item
// class _Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }


class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        // this.size = 0;
    }

    enqueue(value) {
        const node = new _Node(value);
        if (this.first === null) {
            this.first = node;
        }
        if (this.last) {
            this.last.next = node;
        }

        this.last = node;
        // this.size++;
    }
    // Remember: You only remove from the front.
    dequeue() {
        if (this.first === null) {
            return;
        }
        // we need to save this first node before replacing it so that we can check
        // if it is the only item on the list
        const node = this.first;
        this.first = this.first.next;
        if (node === this.last) {
            this.last = null;
        }
        // need this to be returned so you can use its value later
        this.size--;
        return node.value;
    }
}

const queue = new Queue();

queue.enqueue("1st");
queue.enqueue("2nd");
queue.enqueue("3rd");
queue.dequeue();

console.log(queue);



// Create a queue using Singly linked list

const starTrekQ = new Queue();

starTrekQ.enqueue("Kirk");
starTrekQ.enqueue("Spock");
starTrekQ.enqueue("Uhura");
starTrekQ.enqueue("Sulu");
starTrekQ.enqueue("Checkov");

const peek2 = queue => {
    console.log(queue.first);
};


const isEmpty2 = queue => {
    if (queue.first === null) {
        return true;
    }
    return false;
};


const displayQueue = queue => {
    let currNode = queue.first;
    while (queue.next !== null) {
        console.log(currNode);
        currNode = currNode.next;
    }
};




//  Create a queue class using Doubly linked List

class NodeDeque {
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class Doubly {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(value) {
        const node = new NodeDeque(value);
        if (this.first === null) {
            this.first = node;
        }
        if (this.last) {
            this.last.next = node;
            this.last.prev = this.last;
        }
        this.last = node;
    }
}

function peek(queue) {
    let node = queue.first.value;
    if (node.next === undefined) {
        node = node;
    }
    return node;
}


function isEmpty(queue) {
    if (queue.first) {
        return false;
    } else {
        return true;
    }
}

function display(queue) {
    let node = queue.first;
    while (node.next !== null) {
        console.log(node);
        node = node.next;
    }
}

const starTrekDQ = new Doubly();
starTrekDQ.enqueue("Kirk");
starTrekDQ.enqueue("Spock");
starTrekDQ.enqueue("Uhura");
starTrekDQ.enqueue("Sulu");
starTrekDQ.enqueue("Checkov");




// Queue implementation using a stack

class DoubleStackQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(item) {
        this.stack1.push(item);
    }

    dequeue() {
        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
}

const myQueue = new DoubleStackQueue();
myQueue.enqueue("1");
myQueue.enqueue("2");
myQueue.enqueue("3");
myQueue.enqueue("4");

let val1 = myQueue.dequeue();
let val2 = myQueue.dequeue();
let val3 = myQueue.dequeue();
let val4 = myQueue.dequeue();

myQueue.enqueue("5");
myQueue.enqueue("6");

let val5 = myQueue.dequeue();
let val6 = myQueue.dequeue();





// Ophidian bank

function teller(queue) {

    while (!isEmpty(queue)) {
        const customer = queue.dequeue();
        if (Math.random() < 0.25) {
            queue.enqueue(customer);
            console.log(`${customer}  sent to back of line`);
        } else {
            console.log(`${customer} served`);
        }
    }
    console.log("finished serving");
}

const bankLine = new Queue();

const customers = [
    "Aaron",
    "Timothy",
    "Shane",
    "Alec",
    "Sean",
    "Alex",
    "Nikolas",
    "Cameron",
    "Morgan",
    "Chelsea",
    "Mathew",
    "Colin",
    "Kent",
    "Gabriel",
    "Joe",
    "Janet"
];

customers.forEach(customer => {
    bankLine.enqueue(customer);
});


