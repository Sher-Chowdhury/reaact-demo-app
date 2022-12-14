const fetch = require('node-fetch')


async function getRandomWord(req) {

    let newWord
    await fetch('https://random-word-api.herokuapp.com/word')
        .then(response => response.json())
        .then(data => {
            newWord = data[0]
            console.log(newWord)
        })
        .catch(err => console.log(err))
    return newWord
}

module.exports = {
    getRandomWord: getRandomWord
}




