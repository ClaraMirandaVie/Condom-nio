// Função para deletar um morador
async function deleteMorador(id) {
  try {
    await fetch(`http://localhost:3500/morador/${id}`, {
      method: 'DELETE'
    });
    loadMorador();
  } catch (error) {
    console.error("Erro ao deletar morador:", error);
    alert("Erro ao tentar excluir morador.");
  }
}

// Função para buscar e exibir moradores
async function loadMorador() {
  try {
    const response = await fetch('http://localhost:3500/morador/listar');

    if (!response.ok) {
      throw new Error("Erro ao carregar moradores");
    }

    const data = await response.json();
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; // Limpa a tabela antes de inserir novos dados

    data.data.forEach(morador => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${morador.nome}</td>
        <td>${morador.bloco}</td>
        <td>${morador.telefone}</td>
        <td>${morador.email}</td>
        <td>${morador.placa}</td>
        <td>${morador.vaga}</td>
        <td>${morador.cor_modelo}</td>
        <td>
          <button onclick="editMorador(${morador.id})">Editar</button>
          <button onclick="deleteMorador(${morador.id})">Excluir</button>
        </td>
      `;
      tbody.appendChild(row);
    });

  } catch (error) {
    console.error("Erro ao carregar moradores:", error);
    alert("Erro ao buscar moradores.");
  }
}

// Função para editar um morador
async function editMorador(id) {
  const nome = prompt("Novo nome do morador:");
  const bloco = prompt("Novo bloco e apartamento do morador:");
  const email = prompt("Novo email do morador:");
  const telefone = prompt("Novo telefone do morador:");
  const placa = prompt("Nova placa do morador:");
  const cor_modelo = prompt("Nova cor/modelo do morador:");
  const vaga = prompt("Nova vaga do morador:");

  try {
    const response = await fetch(`http://localhost:3500/morador/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, bloco, email, telefone, placa, cor_modelo, vaga })
    });

    const results = await response.json();

    if (results.success) {
      console.log(results);
      alert("Morador editado com sucesso!");
      loadMorador();
    } else {
      alert("Atualização sem sucesso");
      console.log(results);
    }
  } catch (error) {
    console.error("Erro ao editar morador:", error);
    alert("Erro ao tentar atualizar morador.");
  }
}

// Carregar moradores ao iniciar a página
loadMorador();
