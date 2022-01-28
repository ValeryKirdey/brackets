module.exports = function check(str, bracketsConfig) {
    while (true) {
        let arr = str;
        for (let i = 0; i < bracketsConfig.length; i++) {
            let parentheses = bracketsConfig[i][0] + bracketsConfig[i][1];
            if (arr.indexOf(parentheses) != -1) {
                arr = arr.replace(parentheses, "");
            }
        }
        if (arr == str) {
            break;
        }
        str = arr;
    }
    return str == "";
}