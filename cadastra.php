<?php
  //Definição de variáveis
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $senha = $_POST['senha'];

  if($_SERVER["REQUEST_METHOD"]=="POST"){
    if(! isset($_COOKIE["cookieName"])){
      setcookie("nome", $nome,  0, "/", "", False, False);
    }
  }else{
    echo "Método errado"
  }
?>

