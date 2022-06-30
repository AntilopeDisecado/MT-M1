'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  let pivot = array[Math.floor(Math.random ()*array.length)];  
  let left = []; 
  let right = [];
  let equals = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i] < pivot) {
    left.push(array[i]);
    } else if (array[i] > pivot) {
    right.push(array[i]);
    } else {
    equals.push(array[i]);
    }
  }
  return quickSort(left).concat(equals).concat(quickSort(right))
}

////////////////////////////////////////////////////////////////////////////////////////////

function divide(array){
  var middle = Math.floor(array.length/2);
  var left = array.slice(0, middle);
  var right = array.slice(middle);
  return [left, right]
  }

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.lenght === 1) return array;
var half = divide(array);
var left = half[0];
var right = half[1];
return merge(mergeSort(left), mergeSort(right))
}
   
function merge (left, right) {
leftIndex = 0;
rightIndex= 0;
var array = [];
while (leftIndex < left.length && rightIndex < right.length) {
  if (left[leftIndex] < right[rightIndex]) {
    array.push(left[leftIndex])
    leftIndex++
  } else {
    array.push(right[rightIndex])
    rightIndex++  
  }
} 
return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
