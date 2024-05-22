// Question #3
let userPassword = "swnalWadqQ";
let userPassword2 = "TechUp";
let userPassword3 = "abcde";
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(pass){
    if (pass.length < 6){
        return "Weak"
    } else if (pass.length >= 6 && pass.length <= 9){
        return "Medium"
    } else if (pass.length >= 10){
        return "Strong"
    }
}

console.log(checkPasswordStrength(userPassword))
console.log(checkPasswordStrength(userPassword2))
console.log(checkPasswordStrength(userPassword3))