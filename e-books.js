const selectedEbook = JSON.parse(localStorage.getItem("selectedEbook"))

const ebooksDetailsContainer = document.getElementById("ebooks-details")

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
        <div class="d-flex" style="gap: 1rem;">
        <button type="button" id="rentButton" class="btn btn-primary">Alugar</button>
        <button type="button" id="returnButton" class="btn btn-secondary">Devolver</button>
        </div>
        <div id="message" style="margin-top: 1rem; color: green;"></div> <!-- Container para a mensagem -->
          </div>
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
    showMessage("E-book alugado com sucesso!")
  })

  returnButton.addEventListener("click", () => {
    rentButton.disabled = false
    returnButton.disabled = true
    showMessage("E-book devolvido com sucesso!")
  })

} else {
  ebooksDetailsContainer.innerHTML = "<p>Nenhum E-book selecionado.</p>"
}
