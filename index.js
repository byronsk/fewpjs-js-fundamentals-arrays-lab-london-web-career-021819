// Write your solution here!

const append = ["Milo", "Otis", "Garfield"];
append.splice(3, 0, 'Odie');

const prepend1 = ["Milo", "Otis", "Garfield"];
const prepend = ['Odie', ...prepend1]
prepend;

const removeLast = ["Milo", "Otis", "Garfield"];
removeLast.pop()

const removeFirst = ["Milo", "Otis", "Garfield"];
removeFirst.shift()
