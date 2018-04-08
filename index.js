const app = "I don't do much.";

function bumpCounter(callback) {
  var counter = 0;

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
  function deadlyDevice(weapon) {
    return weapon;
  }
  
  return function() {
    animalType,
    deadlyDevice;
  };
}

const { deadlyDevice } = createAnimal('sharkCreator')
const sharkCreator = createAnimal('Shark');
const sharkWithFrickinLaserbeam { sharkCreator, deadlyDevice } = ;