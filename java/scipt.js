function avancar(){

  const nome =
    document.getElementById("nome").value

  const telefone =
    document.getElementById("telefone").value

  const endereco =
    document.getElementById("endereco").value

  const cpf =
    document.getElementById("cpf").value

  if(
    nome === "" ||
    telefone === "" ||
    endereco === "" ||
    cpf === ""
  ){

    alert("Preencha todos os campos!")

    return
  }

  localStorage.setItem("nome", nome)
  localStorage.setItem("telefone", telefone)
  localStorage.setItem("endereco", endereco)
  localStorage.setItem("cpf", cpf)

  window.location.href = "crianca.html"
}

function finalizar(){

  alert(
    "Cadastro realizado com sucesso! 🎉"
  )
}