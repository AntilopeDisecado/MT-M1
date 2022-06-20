'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let arrNum = Array.from(String(num), Number);
  let convertido = 0;
  for (let i = 0; i < arrNum.length; i++) {
      convertido = convertido * 2 + arrNum[i];
     }
  return convertido
}

function DecimalABinario(num) {
  // tu codigo aca
  let convertido = []
  let aConvertir 
  do {
    aConvertir = num % 2;
    convertido.unshift([aConvertir]);
      if (num % 2 > 0) {
      num = num - 1;
      }
    num = num / 2;
  }
  while (num / 2 > 0);
  return convertido.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}