const groceryStack = [];
const maxSize = 5;

function peek() {
  if (groceryStack.length === 0) {
    return "Stack is empty";
  } else {
    return groceryStack[groceryStack.length - 1];
  }
}

function push(item) {
  if (groceryStack.length < maxSize) {
    groceryStack.push(item);
    console.log("Stack after push:", groceryStack);
  } else {
    console.log("Stack is full. Cannot push.");
  }
}

function pop() {
  if (groceryStack.length === 0) {
    console.log("Stack is empty. Cannot pop.");
  } else {
    const poppedItem = groceryStack.pop();
    console.log("Popped item:", poppedItem);
    console.log("Stack after pop:", groceryStack);
  }
}

// Example usage (simulating user input):
push("Milk");
push("Eggs");
push("Bread");
push("Cheese");
push("Apples");
push("Oranges"); // This will show the stack is full

pop();
pop();
peek();
