function salvar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    if (nome === "" || email === "") {
        alert("Preencha todos os campos!");
        return;
    }

    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
   
    alert("Cadastro salvo com sucesso!");
    window.location.href = "index.html";
}