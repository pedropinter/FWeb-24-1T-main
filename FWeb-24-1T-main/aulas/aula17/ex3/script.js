let nome = "";
let idade = "";
let cpf = "";
let telefone = "";

let paragrafo = document.getElementById("demo");
fetch("./data.json")
.then(response => response.json())
.then(data =>{


nome = data.pessoas[i].nome;
idade = data.pessoas[i].idade;
cpf = data.pessoas[i].cpf;
telefone = data.pessoas[i].telefone;

    document.getElementById("demo").innerHTML = "Usuario: "+nome+"\nIdade: "+idade+"\nCPF: "+cpf+"\nTelefone: "+telefone  
})