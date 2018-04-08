const app = "I don't do much."

function bumpCounter(callback) {
  var counter = 0

  function addBump() {
    return counter++;
  }

  function getBumps() {
    return counter;
  }

  return {
    addBump,
    getBumps
  };
}

function createAnimal(animalType) {
  function deadlyDevice(weapon) {}
}
