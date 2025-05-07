// console.log(Math.floor(Math.random() * 10));

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0987654321";
const symbols = `!"#$%&'()*+,-./:;<=>?@[]^_{|}~'`;
let x = '';

function createPassword(){
    
    let passwd = "";
    for(let i = 0; i < 3; i++){
        passwd += upperCase[Math.floor(Math.random() * upperCase.length) ]
        passwd += lowerCase[Math.floor(Math.random() * lowerCase.length)]
        passwd += symbols[Math.floor(Math.random() * symbols.length)]
        passwd += number[Math.floor(Math.random() * number.length)]
        
    }
    x = passwd;
}

createPassword()
console.log(x);
