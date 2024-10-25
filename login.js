function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validatePassword(password) {
  return password.length >= 6 // Senha com pelo menos 6 caracteres
}

function handleLogin() {
  const email = document.getElementById("emailInput").value
  const password = document.getElementById("passwordInput").value
  const stayLoggedIn = document.getElementById("check").checked

  if (!validateEmail(email)) {
    alert("Por favor, insira um email válido.")
    return
  }

  if (!validatePassword(password)) {
    alert("A senha deve ter pelo menos 6 caracteres.")
    return
  }

  const storedEmail = "usuario@exemplo.com"
  const storedPassword = "senha123"

  if (email === storedEmail && password === storedPassword) {
    if (stayLoggedIn) {
      localStorage.setItem("isLoggedIn", "true")
    } else {
      sessionStorage.setItem("isLoggedIn", "true")
    }
    window.location.href = "home.html"
  } else {
    alert("Usuário inválido!")
  }
}

function guestLogin() {
  // Redireciona imediatamente para a página inicial
  window.location.href = "home.html"
}
