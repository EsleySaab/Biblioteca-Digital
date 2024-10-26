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
        <button type="button" id="rentButton" class="btn btn-primary" onclick="rentEbook()">Alugar</button>
        <button type="button" id="returnButton" class="btn btn-secondary" onclick="returnEbook()">Devolver</button>
        </div>
        <div id="message" style="margin-top: 1rem; color: green;"></div> <!-- Container para a mensagem -->
          </div>
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

  const ebooks = JSON.parse(localStorage.getItem("ebooks")) || []
  console.log(selectedEbook)
  const rentedEbook = ebooks.find((ebook) => ebook.ISBN === selectedEbook.ISBN)

  if (rentedEbook && rentedEbook.rented) {
    document.getElementById("rentButton").disabled = true
  }

  if (rentedEbook && !rentedEbook.rented) {
    document.getElementById("returnButton").disabled = true
  }
} else {
  ebooksDetailsContainer.innerHTML = "<p>Nenhum E-book selecionado.</p>"
}

function rentEbook() {
  const selectedEbook = JSON.parse(localStorage.getItem("selectedEbook"))
  const ebooks = JSON.parse(localStorage.getItem("ebooks")) || []
  const ebookToRent = ebooks.find((ebook) => ebook.ISBN === selectedEbook.ISBN)
  console.log(ebookToRent)
  if (ebookToRent) {
    if (!ebookToRent.rented) {
      ebookToRent.rented = true
      localStorage.setItem("ebooks", JSON.stringify(ebooks))
      document.getElementById("rentButton").disabled = true
      document.getElementById("returnButton").disabled = false
      showMessage("E-book alugado com sucesso!")
    }
  }
}

function returnEbook() {
  const selectedEbook = JSON.parse(localStorage.getItem("selectedEbook"))
  const ebooks = JSON.parse(localStorage.getItem("ebooks")) || []
  const ebookToReturn = ebooks.find(
    (ebook) => ebook.ISBN === selectedEbook.ISBN
  )

  if (ebookToReturn) {
    if (ebookToReturn.rented) {
      ebookToReturn.rented = false
      localStorage.setItem("ebooks", JSON.stringify(ebooks))
      document.getElementById("rentButton").disabled = false
      document.getElementById("returnButton").disabled = true
      showMessage("E-book devolvido com sucesso!")
    }
  }
}
