let usuarios = []

function cadastrarUsuario(){
    let nome = prompt("Digite o nome: ")
    let idade = prompt("Digite a idade: ")
    let email = prompt("Digite o email: ")
    let cidade = prompt("Digite a cidade: ")
    let telefone = prompt("Digite o telefone: ")




let usuario = {
    nome: nome,
    idade: idade,
    email: email,
    cidade: cidade,
    telefone: telefone
}
let lista = {
    usuarios: []
}
usuarios.push(usuario)

alert("Usuário cadastrado com sucesso!")
}

function listarUsuarios(){
let div = document.getElementById("lista")
div.innerHTML = ""
for(let i = 0; i < usuarios.length; i++){
    let p = document.createElement("p")
    p.textContent=
    "Nome: " + usuarios[i].nome+
    "Idade: " + usuarios[i].idade + 
    "Email: " + usuarios[i].email + 
    "Cidade: " + usuarios[i].cidade + 
    "Telefone: " + usuarios[i].telefone
    div.appendChild(p)
    
    }
}