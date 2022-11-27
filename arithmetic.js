// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

function arithmetic(a, b, operator){
    switch (operator) {
        case 'add':
        return a + b;
        break;
        
        case 'subtract':
        return a - b;
        break;
        
        case 'divide':
        return a / b;
        break;
        
        case 'multiply':
        return a * b;
        break;
    }
  }