const fields = document.querySelectorAll("[required]") //Vai pegar na página todos os itens que tiverem required

console.log(fields)

//Para cada field em fields
for(field of fields){
  field.addEventListener("invalid", event =>{
    console.log("Campo inválido")
  })
}