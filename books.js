const selectedBook = JSON.parse(localStorage.getItem("selectedBook"))

const bookDetailsContainer = document.getElementById("books-details")

if (selectedBook) {
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
        <button type="button" id="rentButton" class="btn btn-primary">Alugar</button>
        <button type="button" id="returnButton" class="btn btn-secondary">Devolver</button>
          </div>
          <div id="message" style="margin-top: 1rem; color: green;"></div> <!-- Container para a mensagem -->
          </div>
        </div>
      </div>
    </div>
  `

  
  const rentButton = document.getElementById("rentButton")
  const returnButton = document.getElementById("returnButton")
  const messageContainer = document.getElementById("message")

  function showMessage(message) {
    messageContainer.textContent = message
    setTimeout(() => {
      messageContainer.textContent = ""
    }, 1000)
  }

  rentButton.addEventListener("click", () => {
    rentButton.disabled = true
    returnButton.disabled = false
    showMessage("Livro alugado com sucesso!")
  })

  returnButton.addEventListener("click", () => {
    rentButton.disabled = false
    returnButton.disabled = true
    showMessage("Livro devolvido com sucesso!")
  })

} else {
  bookDetailsContainer.innerHTML = "<p>Nenhum livro selecionado.</p>"
}
