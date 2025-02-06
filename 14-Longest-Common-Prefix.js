function longestCommonPrefix(str) {
    if (str.length == 0) { return "" }
    if(str.length == 1) {return str[0]}

    let num = 0
    while (str[0][num] && str.every((word) => word[num] === str[0][num]))
        num++


    let final = str[0].slice(0, num)
    return final
}



