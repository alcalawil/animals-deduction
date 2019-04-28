const animals = require('./animals');

const inputAnimals = 'Fabulo,Locabal,Localme,Vicero,Irmoderado,Anteelfe,Toga,ElOn,Dorapelo,Comas,Trapean,Grite';

const inputArray = inputAnimals.toLowerCase().split(',');

function main() {
  for (const badAnimal of inputArray) {
    let found = false;
    while(!found) {
      const newAnimal = badAnimal.shuffle();
      for (const goodAnimal of animals) {
        if (goodAnimal === newAnimal) {
          found= true;
          console.log(newAnimal);
        }
      }
    }

  }
}

String.prototype.shuffle = function () {
  var a = this.split(""),
    n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}

main();