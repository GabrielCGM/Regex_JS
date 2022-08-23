/* REGEX CEP 8 CARAC
 8 CARACTERES
 12345-123 
 12345123
 12345 123
*/
const regexValid = /^[0-9]{5}(\-|\s)?[0-9]{3}$/



console.log(regexValid.test('123-822')) // FALSE
console.log(regexValid.test('12345-123')) // TRUE
console.log(regexValid.test('12345123')) //TRUE 
console.log(regexValid.test('222111210')) //FALSE
console.log(regexValid.test('a13444020')) //FALSE
console.log(regexValid.test('a255820c')) //FALSE
console.log(regexValid.test('12345 123')) // TRUE
console.log(regexValid.test('12345 23')) // FALSE
console.log(regexValid.test('123452 123')) // FALSE
