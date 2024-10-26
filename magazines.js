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
        <button type="button" id="rentButton" class="btn btn-primary" onclick="rentMagazine()">Alugar</button>
        <button type="button" id="returnButton" class="btn btn-secondary" onclick="returnMagazine()">Devolver</button>
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

  const magazines = JSON.parse(localStorage.getItem("magazines")) || []
  console.log(selectedMagazine)
  const rentedMagazine = magazines.find((magazine) => magazine.ISBN === selectedMagazine.ISBN)

  if (rentedMagazine && rentedMagazine.rented) {
    document.getElementById("rentButton").disabled = true
  }

  if (rentedMagazine && !rentedMagazine.rented) {
    document.getElementById("returnButton").disabled = true
  }
} else {
  magazinesDetailsContainer.innerHTML = "<p>Nenhum livro selecionado.</p>"
}

function rentMagazine() {
  const selectedMagazine = JSON.parse(localStorage.getItem("selectedMagazine"))
  const magazines = JSON.parse(localStorage.getItem("magazines")) || []
  const magazineToRent = magazines.find((magazine) => magazine.ISBN === selectedMagazine.ISBN)
  console.log(magazineToRent)
  if (magazineToRent) {
    if (!magazineToRent.rented) {
      magazineToRent.rented = true
      localStorage.setItem("magazines", JSON.stringify(magazines))
      document.getElementById("rentButton").disabled = true
      document.getElementById("returnButton").disabled = false
      showMessage("Revista alugada com sucesso!")
    }
  }
}

function returnMagazine() {
  const selectedMagazine = JSON.parse(localStorage.getItem("selectedMagazine"))
  const magazines = JSON.parse(localStorage.getItem("magazines")) || []
  const magazineToReturn = magazines.find((magazine) => magazine.ISBN === selectedMagazine.ISBN)

  if (magazineToReturn) {
    if (magazineToReturn.rented) {
      magazineToReturn.rented = false
      localStorage.setItem("magazines", JSON.stringify(magazines))
      document.getElementById("rentButton").disabled = false
      document.getElementById("returnButton").disabled = true
      showMessage("Revista devolvida com sucesso!")
    }
  }
}
