// Recupera os dados do filme do localStorage
const selectedEbook = JSON.parse(localStorage.getItem("selectedEbook"))

// Seleciona o container onde os detalhes do filme serão exibidos
const ebooksDetailsContainer = document.getElementById("ebooks-details")

// Verifica se há um filme salvo e exibe os detalhes
if (selectedEbook) {
  ebooksDetailsContainer.innerHTML = `
    <div class="card-body" style="max-width: 100%">
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src="${selectedEbook.img}"
        class="img-fluid rounded-start img-4"
        style="border: 4px solid rgb(235, 235, 28);
  border-radius: .7rem;"
        alt="${selectedEbook.name}"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h4 class="card-title">${selectedEbook.name}</h4>
        <p class="card-text">${selectedEbook.description}</p>
        <div class="infos d-flex">
          <p class="card-text"><small class="text-body-secondary">Autor: ${selectedEbook.author}</small></p>
          <p class="card-text"><small class="text-body-secondary">Ano de publicação: ${selectedEbook.year}</small></p>
          <p class="card-text"><small class="text-body-secondary">Gênero: ${selectedEbook.genre}</small></p>
          <p class="card-text"><small class="text-body-secondary">ISBN: ${selectedEbook.ISBN}</small></p>
        </div>
      </div>
    </div>
  </div>
</div>
  `
} else {
  ebooksDetailsContainer.innerHTML = "<p>Nenhum e-book selecionado.</p>"
}
