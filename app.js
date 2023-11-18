/*
Math.floor() - verilen küsüratlı sayıyı (. ile) aşağıya yuvarlar
Math.random() - 0-1 arası rasgele bir küsratlı sayı üretir.
upperCase[5] - 5. sıradaki karakteri getirir.
passwordBox.select() - input box'ın içindeki değeri seçer.
document.execCommand("copy") - seçilmiş değeri kopyalar.
*/

const passwordBox = document.getElementById('password')
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-="
const allChars = upperCase + lowerCase + number + symbol


function createPassword(){
    let password = ""

    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }

    passwordBox.value = password

    copyPassword()
}

function copyPassword(){
    passwordBox.select()
    document.execCommand("copy")
}

