const wordSearch = (letters, word) => { 

    let vertical = [];
    for (let i = 0; i < letters[0].length; i++) {
        vertical.push([]);
    }
    for (let i = 0; i < letters.length; i++) { 
        for (let j = 0; j < vertical.length; j++) {
            vertical[j].push(letters[i][j]);
        }
    }
    
    const verticalJoin = vertical.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    return false;

}

module.exports = wordSearch