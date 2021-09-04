const fields = document.querySelectorAll("[required]")

//console.log(fields)

function customValidation(event) {
  const field = event.target // qual o alvo que disparou o evento(invalid)

  //Lógica para verificar a  existência dos erros
  function verifyErrors() {
    let foundError = false; // Ainda não achei erros, então, em um primeiro momento, retorna falso

    // Para cada erro do field dentro de validity
    for (let error in field.validity) {
      // se não for customError
      // verifica se tem outros erros
      if (error != "customError" && field.validity[error]) {
        foundError = true
      }
    }
    return foundError;
  }

  // Retorna o nome do erro
  const error = verifyErrors();
  console.log("Error exists: ", error);

  if(error){
    // Troca a mensagem do require
    field.setCustomValidity("Esse campo é obrigatório")
  }else{
    field.setCustomValidity("");
  }

}

//Para cada field em fields
for (field of fields) {
  // Verifica se tem algum campo inválido
  field.addEventListener("invalid", customValidation)
}

document.querySelector("form").addEventListener("submit", event => {
  console.log("Enviar  o formulário")

  //Não vai enviar o formulário
  event.preventDefault()
})