// Recupera os dados do filme do localStorage
const selectedMagazine = JSON.parse(localStorage.getItem("selectedMagazine"))

// Seleciona o container onde os detalhes do filme serão exibidos
const magazinesDetailsContainer = document.getElementById("magazines-details")

// Verifica se há um filme salvo e exibe os detalhes
if (selectedMagazine) {
  magazinesDetailsContainer.innerHTML = `
    <div class="card-body" style="max-width: 100%">
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src="${selectedMagazine.img}"
        class="img-fluid rounded-start img-4"
        style="border: 2px solid rgb(83, 83, 252);
  border-radius: .2rem;"
        alt="${selectedMagazine.name}"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h4 class="card-title">${selectedMagazine.name}</h4>
        <p class="card-text">${selectedMagazine.description}</p>
        <div class="infos d-flex">
          <p class="card-text"><small class="text-body-secondary">Diretor: ${selectedMagazine.author}</small></p>
          <p class="card-text"><small class="text-body-secondary">Ano de publicação: ${selectedMagazine.year}</small></p>
          <p class="card-text"><small class="text-body-secondary">Gênero: ${selectedMagazine.genre}</small></p>
          <p class="card-text"><small class="text-body-secondary">ISBN: ${selectedMagazine.ISBN}</small></p>
        </div>
      </div>
    </div>
  </div>
</div>
  `
} else {
  magazinesDetailsContainer.innerHTML = "<p>Nenhum filme selecionado.</p>"
}
