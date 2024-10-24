// Recupera os dados do livro do localStorage
const selectedBook = JSON.parse(localStorage.getItem("selectedBook"))

// Seleciona o container onde os detalhes do livro serão exibidos
const bookDetailsContainer = document.getElementById("books-details")

// Verifica se há um livro salvo e exibe os detalhes
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
          </div>
        </div>
      </div>
    </div>
  `
} else {
  bookDetailsContainer.innerHTML = "<p>Nenhum livro selecionado.</p>"
}
