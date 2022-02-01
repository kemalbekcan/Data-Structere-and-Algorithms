function spinWords(string){
    const splitWord = string.split(' ')
    let modifyWords = []
    for(let word of splitWord){
        if(word.length >= 5){
            word = word.split('').reverse().join('')
        }
        modifyWords.push(word)
    }
    console.log(modifyWords.join(' '))
    return modifyWords.join(' ')
}

spinWords('Hello World !')
