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

console.log(regexValid.test('(21)12345-1234')) // TRUE
console.log(regexValid.test('(21) 12345-1234')) // TRUE
console.log(regexValid.test('(21) 123451234')) // TRUE
console.log(regexValid.test('21 12345-1234'))  // TRUE
console.log(regexValid.test('21 123451234')) // TRUE
console.log(regexValid.test('2112345-1234')) // TRUE
console.log(regexValid.test('21123451234')) // TRUE
