/* REGEX EMAIL
    MODELOS:
    xxxxxxxx@gmail.com
    xxxxxxxx@gmail.com.br
*/
const regexValid = /\w+\@\w+\.{1}(com)$|\w+\@\w+\.{1}(com\.br)$/

console.log(regexValid.test('gabrielgb4230@gmail.com')) //True
console.log(regexValid.test('gabrielgb4230@gmail.com.br')) //True
console.log(regexValid.test('gabrielgb4230@gmail.com.br')) //True
console.log(regexValid.test('gabriel@gmail.com.br')) //True
console.log(regexValid.test('gabrielgmail.com')) // False
console.log(regexValid.test('gabrielgmail.com.br')) // False
console.log(regexValid.test('gabriel@gmail.ccom.br1')) // False
console.log(regexValid.test('gabriel@gmail.com.b')) // False