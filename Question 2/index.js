let password = prompt("Qual a senha?") //senha que sera definida
let setValue = [1,1,1,1]
let requirementsMissing = 0


var upperCase = /[A-Z]/;
var lowerCase = /[a-z]/; 
var number = /[0-9]/;
var specialChar = /[!|@|#|$|%|^|&|*|(|)|-|+]/;


const upperCheck = (password) => {return upperCase.test(password)}
const lowerCheck = (password) => {return lowerCase.test(password)}
const numberCheck = (password) => {return number.test(password)}
const specialCheck = (password) => {return specialChar.test(password)}
const sizeCheck = (password) => {return password.length >= 6}


if(upperCheck(password) == false){setValue[0] = 0}
if(lowerCheck(password) == false){setValue[1] = 0}
if(numberCheck(password) == false){setValue[2] = 0}
if(specialCheck(password) == false){setValue[3] = 0}

 
for (let i = 0; i < 4; i++) {
    if(setValue[i] == 0){
        requirementsMissing += 1
    }            
}

if(sizeCheck(password)){
    document.write(requirementsMissing)
}else{
    if(6 - password.length >= requirementsMissing){
        document.write(6-password.length)
    }else{
        document.write(requirementsMissing)
    }
}

