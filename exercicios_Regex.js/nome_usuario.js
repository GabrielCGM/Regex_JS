/* REGEX NOME USUARIO SÓ VAI ACEITAR
 > LETRAS, NUMEROS, _
 NÃO PODE COMEÇAR COM NUMEROS
 TEM Q TER UM TAMANHO MÍNIMO DE 4 CARAC
 UM TAMNHO MÁXIMO DE 12 CARAC
*/
const regexValid = /^([a-zA-Z])\w{3,11}$/

console.log(regexValid.test('Gabriel_123')) // True
console.log(regexValid.test('gabriel_123')) //True
console.log(regexValid.test('123assd')) // False
console.log(regexValid.test('1assd')) // False
console.log(regexValid.test('Gassd123')) // True
console.log(regexValid.test(' assd')) // False
console.log(regexValid.test('1111111111111111111111111111111')) //False
