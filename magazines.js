const selectedMagazine = JSON.parse(localStorage.getItem("selectedMagazine"))

const magazinesDetailsContainer = document.getElementById("magazines-details")

if (selectedMagazine) {
  magazinesDetailsContainer.innerHTML = `
    <div class="card-body" style="max-width: 100%">
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src="${selectedMagazine.img}"
        class="img-fluid rounded-start img-4"
        style="border: 4px solid rgb(83, 83, 252);
  border-radius: .7rem;"
        alt="${selectedMagazine.name}"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h4 class="card-title">${selectedMagazine.name}</h4>
        <p class="card-text">${selectedMagazine.description}</p>
        <div class="infos d-flex">
          <p class="card-text"><small class="text-body-secondary">Autor: ${selectedMagazine.author}</small></p>
          <p class="card-text"><small class="text-body-secondary">Ano de publicação: ${selectedMagazine.year}</small></p>
          <p class="card-text"><small class="text-body-secondary">Gênero: ${selectedMagazine.genre}</small></p>
          <p class="card-text"><small class="text-body-secondary">ISBN: ${selectedMagazine.ISBN}</small></p>
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
    showMessage("Revista alugada com sucesso!")
  })

  returnButton.addEventListener("click", () => {
    rentButton.disabled = false
    returnButton.disabled = true
    showMessage("Revista devolvida com sucesso!")
  })
} else {
  magazinesDetailsContainer.innerHTML = "<p>Nenhuma revista selecionada.</p>"
}
