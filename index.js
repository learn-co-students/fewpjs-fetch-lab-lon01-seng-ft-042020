// Send a fetch request to the GOT API
// The returned response should be converted to JSON
// Call renderBooks & pass in the API's returned JSON data as the argument
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  .then(json => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
