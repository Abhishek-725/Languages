function checkPalindrome(str , i = 0) {
   if (typeof str == 'string') {
    if (i >= parseInt(str.length / 2)) {
        return true;
    }
    // console.log(str[i]);
    if (str[i] != str[str.length - 1 - i]) {
        return false;
    }
    return checkPalindrome(str, i + 1);
}
}

const strVar = "Abhihba";
const strVar1 = "MoM";

console.log(checkPalindrome(strVar.toLocaleLowerCase()));