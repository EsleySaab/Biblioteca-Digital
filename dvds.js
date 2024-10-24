// Recupera os dados do filme do localStorage
const selectedMovie = JSON.parse(localStorage.getItem("selectedMovie"))

// Seleciona o container onde os detalhes do filme serão exibidos
const movieDetailsContainer = document.getElementById("movie-details")

// Verifica se há um filme salvo e exibe os detalhes
if (selectedMovie) {
  movieDetailsContainer.innerHTML = `
    <div class="card-body" style="max-width: 100%">
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src="${selectedMovie.img}"
        class="img-fluid rounded-start img-4"
        style="border: 2px solid #ce0cce; border-radius: .7rem;"
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
      </div>
    </div>
  </div>
</div>
  `
} else {
  movieDetailsContainer.innerHTML = "<p>Nenhum filme selecionado.</p>"
}
