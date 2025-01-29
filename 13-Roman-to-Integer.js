function romanToInt(s) {
    let split = s.split('')
    let count = 0

    for (let i = 0; i < split.length; i++) {
        if (split[i] == 'I' && split[i + 1] == 'V') { count += 4 }
        if (split[i] == 'I' && split[i + 1] == 'X') { count += 9 }
        if (split[i] == 'X' && split[i + 1] == 'L') { count += 40 }
        if (split[i] == 'X' && split[i + 1] == 'C') { count += 90 }
        if (split[i] == 'C' && split[i + 1] == 'D') { count += 400 }
        if (split[i] == 'C' && split[i + 1] == 'M') { count += 900 }

        if (split[i] == 'I' && split[i + 1] !== 'V' && split[i + 1] !== 'X') { count += 1 }
        if (split[i] == 'V' && split[i - 1] !== 'I') { count += 5 }
        if (split[i] == 'X' && split[i + 1] !== 'L' && split[i + 1] !== 'C' && split[i - 1] !== 'I') { count += 10 }
        if (split[i] == 'L' && split[i - 1] !== 'X') { count += 50 }
        if (split[i] == 'C' && split[i + 1] !== 'D' && split[i + 1] !== 'M' && split[i - 1] !== 'X') { count += 100 }
        if (split[i] == 'D' && split[i - 1] !== 'C') { count += 500 }
        if (split[i] == 'M' && split[i - 1] !== 'C') { count += 1000 }
    }

    return count
}