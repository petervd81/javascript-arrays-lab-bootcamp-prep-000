const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
}

function appendKitten(name) {
  //var newKittens = kittens;
  var newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name) {
  //var newKittens = kittens;
  var newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten(name) {
  var newKittens = kittens;
  //newKittens = 
  return newKittens;
}

function removeFirstKitten(name) {
  var newKittens = kittens;
  newKittens.shift();
  return newKittens;
}
