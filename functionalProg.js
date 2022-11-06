// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

function zero(op) {return op == undefined ? 0 : op(0)}
function one(op) {return op == undefined ? 1 : op(1)}
function two(op) {return op == undefined ? 2 : op(2)}
function three(op) {return op == undefined ? 3 : op(3)}
function four(op) {return op == undefined ? 4 : op(4)}
function five(op) {return op == undefined ? 5 : op(5)}
function six(op) {return op == undefined ? 6 : op(6)}
function seven(op) {return op == undefined ? 7 : op(7)}
function eight(op) {return op == undefined ? 8 : op(8)}
function nine(op) {return op == undefined ? 9 : op(9)}

let plus = (num) => (num2) => num2 + num
let minus = (num) => (num2) => num2 - num
let times = (num) => (num2) => num2 * num
let dividedBy = (num) => (num2) => Math.floor(num2 / num)