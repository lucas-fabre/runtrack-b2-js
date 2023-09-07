function myIsInString(string, char) {
    i = 0;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < char.length; j++) {
            if (string[i] == char[j]) {
                return true;
            }
        }
    }
    return false;
}
console.log(myIsInString("hello world", "llo"));