console.log("------------------------  ---------------------");

console.log("------------------------ mutable array methods ---------------------");

let todoList = [];

const remember = function(task) {
    todoList.push(task);
}
const rememberUrgently = function(task) {
    todoList.unshift(task);
}
const getTask = function() {
    return todoList.shift();
}

remember("boodschappen doen");
remember("bloemenperk wieden");
remember("wagen naar controle");
rememberUrgently("wasmachine starten");
remember("winkel bellen");
console.log(todoList);
console.log(todoList.indexOf("winkel bellen"));
console.log(todoList.lastIndexOf("winkel bellen"));
console.log(todoList.lastIndexOf("wasmachine starten"));
let task = getTask();
console.log(task + " : uitgevoerd");
task = getTask();
console.log(task + " : uitgevoerd");
console.log(todoList);

todoList = todoList.slice(1, 2);
console.log(todoList);
todoList = todoList.concat(["tv kijken", "eten maken"]);
console.log(todoList);
todoList = todoList.concat("rusten");
console.log(todoList);

