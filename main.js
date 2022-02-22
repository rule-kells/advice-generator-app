// variables 
const adviceQuote = document.querySelector('#advice-quote')
const adviceID = document.querySelector('#advice-id')
const apiURL = 'https://api.adviceslip.com/advice'
const returnID = 'https://api.adviceslip.com/advice'
const randomBtn = document.querySelector('#btn-random')

window.onload = () => {
  getQuotes()
  getID()
}


randomBtn.addEventListener('click', () =>  {
    getQuotes()
    getID()
})

function get(url) {
  return fetch(url).then((respsonse) => respsonse.json())
}

const api = {
  get,
}

function getID() {
    api.get(returnID).then((data) => showID(data['slip']['id']))
}


function getQuotes() {
  api.get(apiURL).then((data) => showQuote(data['slip']['advice']))
}

function showID(id) {
    adviceID.innerHTML = id
}

function showQuote(quote) {
    adviceQuote.innerHTML = quote
}



