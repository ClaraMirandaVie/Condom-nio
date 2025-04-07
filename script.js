
// // //cadastro porteiro

// // async function cadastrar(event) {
// //     event.preventDefault();

// //     const email = document.getElementById('email').value;
// //     const senha = document.getElementById('senha').value;
// //     const data = {
// //         email,
// //         senha,
// //     }

// //     // console.log(data);
// //     try {
// //         const response = await fetch('http://localhost:3500/porteiro/cadastrar', {
// //             method: "POST",
// //             headers: {
// //                 "Content-Type": "application/json"
// //             },
// //             body: JSON.stringify(data)
// //         })

// //         const results = await response.json();

// //         if (results.success) {
// //             console.log(results)
// //             alert(results.message)
// //         } else {
// //             alert(results.message)
// //         }
// //     }
// //     catch (error) {
// //         console.log(error);
// //     }
// // }


// //login porteiro

// async function logar(event) {
//     event.preventDefault();
    
//     const email = document.getElementById('email').value;
//     const senha = document.getElementById('senha').value;

//     const data = { email, senha };
//     // console.log(data);

//     try {
//         const response = await fetch('http://localhost:3500/logar', {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         });
        
//         let results = await response.json();
        
//         if (results.success) {
//             let usuarioData = results;
            
//             localStorage.setItem('informacoes', JSON.stringify(usuarioData));
            
//             let html = document.getElementById('informacoes');
//             let dados = JSON.parse(localStorage.getItem('informacoes'));
//             // console.log(dados);
//             let perfil = dados.data.perfil;
            
//             // html.innerHTML = `<div style="display: block; flex-direction: column; align-items:end">
//             // id: ${dados.data.id}, nome: ${dados.data.nome}, email: ${dados.data.email}, perfil: ${dados.data.perfil}
//             // </div>`;
//             // html.style.display = "block";
            
//         } else {
//             alert(results.message);
//         }
//     } catch (error) {
//         console.error("Erro na requisição:", error);
//         alert("Erro ao se conectar ao servidor.");
//     }
// }


// //cadastrar morador

// async function cadastrarMorador(event) {
//     event.preventDefault();

//     const nome = document.getElementById('nome').value;
//     const email = document.getElementById('email').value;
//     const senha = document.getElementById('senha').value;
//     const telefone = Number(document.getElementById('telefone').value);
//     const placa = document.getElementById('placa').value;
//     const cor_modelo = document.getElementById('cor_modelo').value;
//     const vaga = document.getElementById('vaga').value;
//     const file = document.getElementById('file').files[0];

//     let formData = new FormData();
//     formData.append('nome', nome);
//     formData.append('email', email);
//     formData.append('senha', senha);
//     formData.append('telefone', telefone);
//     formData.append('placa', placa);
//     formData.append('cor_modelo', cor_modelo);
//     formData.append('vaga', vaga);
//     formData.append('file', file);
//     try {
//         const response = await fetch('http://localhost:3500/morador/cadastrarMorador', {
//             method: "POST",
//             body: formData 
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(errorData.message || "Erro ao cadastrar morador.");
//         }

//         const results = await response.json();

//         if (results.success) {
//             console.log(results);
//             alert(results.message);
//         } else {
//             alert(results.message);
//         }
//     } catch (error) {
//         console.error("Erro:", error);
//         alert("Ocorreu um erro: " + error.message);
//     }
// }

// // // Funcao para buscar e exibir produtos
// // async function loadProducts() {
// //     const response = await fetch('http://localhost:3500/morador');
// //     const data = await response.json();
// //     const tbody = document.querySelector('tbody');
// //     tbody.innerHTML = ''; // Limpa a tabela antes de inserir novos dados
  
// //     data.products.forEach(morador => {
// //       const row = document.createElement('tr');
// //       row.innerHTML = `
// //         <tr>
// //             <th>${morador.email}</th>
// //             <th>${morador.senha}</th>
// //             <th>R$ ${morador.telefone}</th>
// //             <th>R$ ${morador.placa}</th>
// //             <th>R$ ${morador.cor_modelo}</th>
// //             <th>R$ ${morador.vaga}</th>
// //         <td>
// //             <button onclick="editMorador(${morador.id})">Editar</button>
// //           <button onclick="deleteMorador(${morador.id})">Excluir</button>
// //           </td>        
// //          </tr>
// //       `;
// //       tbody.appendChild(row);
// //     });
// //   }


//  // Função para adicionar um novo morador
// //  document.querySelector('.morador-form form').addEventListener('submit', async (e) => {
// //     e.preventDefault();
    
// //     const nome = document.getElementById('morador-nome').value;
// //     const email = document.getElementById('morador-email').value;
// //     const senha = document.getElementById('morador-senha').value;
// //     const telefone = document.getElementById('morador-telefone').value;
// //     const placa = document.getElementById('morador-placa').value;
// //     const cor_modelo = document.getElementById('morador-cor_modelo').value;
// //     const vaga = document.getElementById('morador-vaga').value;

    
// //     await fetch('http://localhost:3500/morador', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify({  nome, email, senha, telefone, placa, cor_modelo, vaga })
// //     });
  
// //     document.querySelector('.morador-form form').reset();
// //     loadProducts();
// //   });
  
//   // Função para deletar um produto
//   async function deleteMorador(id) {
//     await fetch(`http://localhost:3500/morador/${id}`, {
//       method: 'DELETE'
//     });
//     loadProducts();
//   }
  
//   // Função para editar um produto
//   async function editMorador(id) {
    
//     const nome = prompt("Novo nome do morador:");
//     const email = prompt("Novo email do morador:");
//     const senha = prompt("Novo senha do morador:");
//     const telefone = prompt("Novo telefone do morador:");
//     const placa = prompt("Novo placa do morador:");
//     const cor_modelo = prompt("Novo cor_modelo do morador:");
//     const vaga = prompt("Nova vaga do morador:");
  
//     await fetch(`http://localhost:3500/morador/${id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ nome, email, senha, telefone, placa, cor_modelo, vaga })
//     });
//     loadProducts();
//   }
  
//   // Carregar produtos ao iniciar a página
//   loadProducts();