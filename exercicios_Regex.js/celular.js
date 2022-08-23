/* REGEX CELULAR
    MODELOS:
    (YY)XXXXX-XXXX
    (YY) XXXXX-XXXX
    (YY) XXXXXXXXX
    YY XXXXX-XXXX
    YY XXXXXXXXX
    YYXXXXX-XXXX
    YYXXXXXXXXX
*/
const regexValid = /^\(?[\d]{2}\)?\s?[0-9]{5}\-?[0-9]{4}$/

console.log(regexValid.test('(21)96525-8151')) // TRUE
console.log(regexValid.test('(21) 96525-8151')) // TRUE
console.log(regexValid.test('(21) 965258151')) // TRUE
console.log(regexValid.test('21 96525-8151'))  // TRUE
console.log(regexValid.test('21 965258151')) // TRUE
console.log(regexValid.test('2196525-8151')) // TRUE
console.log(regexValid.test('21965258151')) // TRUE