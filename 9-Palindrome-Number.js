function isPalindrome(num) {
    const numStr = num.toString()
    const numCopy = num
    const numCheck = []

    for (let i = 0; i < numStr.length; i++) {
        numCheck.unshift(numStr[i])
    }

    const final = numCheck.join('')

    if (Number(final) === numCopy) { return true }
    else { return false }

}