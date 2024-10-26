const selectedBook = JSON.parse(localStorage.getItem("selectedBook"))

const bookDetailsContainer = document.getElementById("books-details")

// Verifica se há um livro salvo e exibe os detalhes
if (selectedBook) {
  // const index = books.findIndex((book) => book.ISBN === selectedBook.ISBN) // Encontre o índice do livro baseado no ISBN
  bookDetailsContainer.innerHTML = `
    <div class="card-body" style="max-width: 100%">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="${selectedBook.img}"
            class="img-fluid rounded-start img-4"
            style="border: 4px solid green;
  border-radius: .7rem;"
            alt="${selectedBook.name}"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h4 class="card-title">${selectedBook.name}</h4>
            <p class="card-text">${selectedBook.description}</p>
            <div class="infos d-flex">
              <p class="card-text"><small class="text-body-secondary">Autor: ${selectedBook.author}</small></p>
              <p class="card-text"><small class="text-body-secondary">Ano de publicação: ${selectedBook.year}</small></p>
              <p class="card-text"><small class="text-body-secondary">Gênero: ${selectedBook.genre}</small></p>
              <p class="card-text"><small class="text-body-secondary">ISBN: ${selectedBook.ISBN}</small></p>
            </div>
            <div class="d-flex" style="gap: 1rem;">
        <button type="button" id="rentButton" class="btn btn-primary" onclick="rentBook()">Alugar</button>
        <button type="button" id="returnButton" class="btn btn-secondary" onclick="returnBook()">Devolver</button>
          </div>
          <div id="message" style="margin-top: 1rem; color: green;"></div> <!-- Container para a mensagem -->
          </div>
        </div>
      </div>
    </div>
  `

  // Função para exibir a mensagem de sucesso e removê-la após 3 segundos
  function showMessage(message) {
    const messageContainer = document.getElementById("message")
    messageContainer.textContent = message
    setTimeout(() => {
      messageContainer.textContent = "" // Limpa a mensagem após 3 segundos
    }, 1000)
  }

  const books = JSON.parse(localStorage.getItem("books")) || []
  console.log(selectedBook)
  const rentedBook = books.find((book) => book.ISBN === selectedBook.ISBN)

  if (rentedBook && rentedBook.rented) {
    document.getElementById("rentButton").disabled = true
  }

  if (rentedBook && !rentedBook.rented) {
    document.getElementById("returnButton").disabled = true
  }
} else {
  bookDetailsContainer.innerHTML = "<p>Nenhum livro selecionado.</p>"
}


function rentBook() {
  const selectedbBook = JSON.parse(localStorage.getItem("selectedBook"))
  const books = JSON.parse(localStorage.getItem("books")) || []
  const bookToRent = books.find((book) => book.ISBN === selectedbBook.ISBN)
  console.log(bookToRent)
  if (bookToRent) {
    if (!bookToRent.rented) {
      bookToRent.rented = true
      localStorage.setItem("books", JSON.stringify(books))
      document.getElementById("rentButton").disabled = true
      document.getElementById("returnButton").disabled = false
      showMessage("Livro alugado com sucesso!")
     
    }
  }
}

function returnBook() {
  const selectedbBook = JSON.parse(localStorage.getItem("selectedBook"))
  const books = JSON.parse(localStorage.getItem("books")) || []
  const bookToReturn = books.find((book) => book.ISBN === selectedbBook.ISBN)

  if (bookToReturn) {
    if (bookToReturn.rented) {
      bookToReturn.rented = false
      localStorage.setItem("books", JSON.stringify(books))
      document.getElementById("rentButton").disabled = false
      document.getElementById("returnButton").disabled = true
      showMessage("Livro devolvido com sucesso!")
    }
  }
}
