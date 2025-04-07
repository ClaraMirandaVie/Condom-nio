// cadastrarMorador.js

async function cadastrarMorador(event) {
    event.preventDefault();

    try {
        const nomeInput = document.getElementById('nome');
        const blocoInput = document.getElementById('bloco');
        const emailInput = document.getElementById('email');
        const telefoneInput = document.getElementById('telefone');
        const placaInput = document.getElementById('placa');
        const corModeloInput = document.getElementById('cor_modelo');
        const vagaInput = document.getElementById('vaga');

        if (!nomeInput || !emailInput || !telefoneInput) {
            throw new Error("Um ou mais campos obrigatórios não foram encontrados no formulário.");
        }

        const nome = nomeInput ? nomeInput.value:"";
        const bloco = blocoInput ? blocoInput.value : "";
        const email = emailInput ? emailInput.value : "";
        const telefone = telefoneInput ? telefoneInput.value: "";
        const placa = placaInput ? placaInput.value : "";
        const cor_modelo = corModeloInput ? corModeloInput.value : "";
        const vaga = vagaInput ? vagaInput.value : "";

        let formData = new FormData();
        formData.append('nome', nome);
        formData.append('bloco', bloco);
        formData.append('email', email);
        formData.append('telefone', telefone);
        formData.append('placa', placa);
        formData.append('cor_modelo', cor_modelo);
        formData.append('vaga', vaga);
        

        const response = await fetch('http://localhost:3500/morador/cadastrarMorador', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome,
                bloco,
                email,
                telefone,
                placa,
                cor_modelo,
                vaga
            })
        });
        const results = await response.json();

        if (!response.ok) {
            throw new Error(results.message || "Erro ao cadastrar morador.");
        }

        if (results.success) {
            alert(results.message);
            window.location.href = "tabelaMoradores.html";
        } else {
            alert(results.message);
        }

    } catch (error) {
        console.error("Erro:", error);
        alert("Ocorreu um erro: " + error.message);
    }
}
