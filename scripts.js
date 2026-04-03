document.getElementById("formAdocao").addEventListener("submit", function (e) {

    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email= document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = parseInt(document.getElementById("idade").value);
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.getElementById("quintal").value;
    let pet = document.getElementById("pet").value;
    let horas = parseInt(document.getElementById("horas").value);
    let motivo = document.getElementById("motivo").value;
    let termo = document.getElementById("termo").checked;
    let cpfsExistentes = ["12345678900", "11122233344"];
    
});