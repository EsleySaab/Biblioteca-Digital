const selectedMovie = JSON.parse(localStorage.getItem("selectedMovie"))

const movieDetailsContainer = document.getElementById("movie-details")

if (selectedMovie) {
  movieDetailsContainer.innerHTML = `
    <div class="card-body" style="max-width: 100%">
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src="${selectedMovie.img}"
        class="img-fluid rounded-start img-4"
        style="border: 4px solid #ce0cce; border-radius: .7rem;"
        alt="${selectedMovie.name}"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h4 class="card-title">${selectedMovie.name}</h4>
        <p class="card-text">${selectedMovie.description}</p>
        <div class="infos d-flex">
          <p class="card-text"><small class="text-body-secondary">Diretor: ${selectedMovie.director}</small></p>
          <p class="card-text"><small class="text-body-secondary">Ano de lançamento: ${selectedMovie.year}</small></p>
          <p class="card-text"><small class="text-body-secondary">Gênero: ${selectedMovie.genre}</small></p>
          <p class="card-text"><small class="text-body-secondary">ISBN: ${selectedMovie.ISBN}</small></p>
        </div>
        <div class="d-flex" style="gap: 1rem;">
        <button type="button" id="rentButton" class="btn btn-primary" onclick="rentMovie()">Alugar</button>
        <button type="button" id="returnButton" class="btn btn-secondary" onclick="returnMovie()">Devolver</button>
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

  const movies = JSON.parse(localStorage.getItem("movies")) || []
  console.log(selectedMovie)
  const rentedMovie = movies.find((movie) => movie.ISBN === selectedMovie.ISBN)

  if (rentedMovie && rentedMovie.rented) {
    document.getElementById("rentButton").disabled = true
  }

  if (rentedMovie && !rentedMovie.rented) {
    document.getElementById("returnButton").disabled = true
  }
} else {
  movieDetailsContainer.innerHTML = "<p>Nenhum filme selecionado.</p>"
}


function rentMovie() {
  const selectedMovie = JSON.parse(localStorage.getItem("selectedMovie"))
  const movies = JSON.parse(localStorage.getItem("movies")) || []
  const movieToRent = movies.find((movie) => movie.ISBN === selectedMovie.ISBN)
  console.log(movieToRent)
  if (movieToRent) {
    if (!movieToRent.rented) {
      movieToRent.rented = true
      localStorage.setItem("movies", JSON.stringify(movies))
      document.getElementById("rentButton").disabled = true
      document.getElementById("returnButton").disabled = false
      showMessage("Filme alugado com sucesso!")
    }
  }
}

function returnMovie() {
  const selectedMovie = JSON.parse(localStorage.getItem("selectedMovie"))
  const movies = JSON.parse(localStorage.getItem("movies")) || []
  const movieToReturn = movies.find((movie) => movie.ISBN === selectedMovie.ISBN)

  if (movieToReturn) {
    if (movieToReturn.rented) {
      movieToReturn.rented = false
      localStorage.setItem("movies", JSON.stringify(movies))
      document.getElementById("rentButton").disabled = false
      document.getElementById("returnButton").disabled = true
      showMessage("Filme devolvido com sucesso!")
    }
  }
}