var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element){
  answer = [element, ...array];
  return answer;
}


function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element){
  answer = [...array, element];
  return answer;
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function accessElementInArray(array, element){
  return array[element];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  answer = array.slice(1);
  return answer;
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  answer = array.slice(0,array.length-1);
  return answer;
}
