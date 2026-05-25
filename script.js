const API = "https://backendlista.onrender.com";

async function enviarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    try {

        await fetch(`${API}/confirmar`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome,
                mensagem
            })
        });

        alert("Presença confirmada 💙");

        document.getElementById("formulario").reset();

    } catch (erro) {

        alert("Erro ao enviar.");
        console.error(erro);

    }
}

document
    .getElementById("formulario")
    .addEventListener("submit", enviarFormulario);