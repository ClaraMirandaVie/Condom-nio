// Importar pacotes para a aplicação
const express = require('express');
const cors = require('cors');
const connection = require('./dbd_config');
// Definir a porta do express e instanciar o express
const porta = 3500;
const app = express();
// Habilitar o cors e utilização de JSON
app.use(cors());
app.use(express.json())
// Testar API
app.listen(porta, () => console.log(`Rodando na porta ${porta}`));
// Importar a conexão com o banco



// porteiro //

app.post('/porteiro/cadastrar', (request, response) => {
    let params = Array(
        request.body.email,
        request.body.senha
    );
    let query = "INSERT INTO porteiro(email, senha) VALUES (?,?)";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Sem sucesso",
                    data: err
                });
        }
    });

});




app.post('/logar', (request, response) => {
    const { email, senha } = request.body;
    const query = "SELECT * FROM porteiro WHERE email = ? AND senha = ?";

    connection.query(query, [email, senha], (err, results) => {
        if (err) {
            return response.status(500).json({ success: false, message: "Erro no servidor", error: err });
        }

        if (results.length > 0) {
            response.status(200).json({
                success: true,
                message: "Login bem-sucedido",
                data: results[0]
            });
        } else {
            response.status(401).json({
                success: false,
                message: "Email ou senha inválidos"
            });
        }
    });
});


app.post('/morador/cadastrarMorador', (request, response) => {
    let params = Array(
        request.body.nome,
        request.body.bloco,
        request.body.email,
        request.body.telefone,
        request.body.placa,
        request.body.cor_modelo,
        request.body.vaga

    )
    const query = "INSERT INTO morador(nome, bloco, email, telefone, placa, cor_modelo, vaga) VALUES (?, ?, ?, ?, ?, ?, ?)";

    connection.query(query, params, (err, results) => {
        if (err) {
            return response.status(400).json({
                success: false,
                message: "Erro ao inserir morador no banco de dados.",
                error: err
            });
        }

        return response.status(201).json({
            success: true,
            message: "Morador cadastrado com sucesso!",
            data: { id: results.insertId }
        });
    });
});



app.get('/morador/listar', (request, response) => {
    let query = "SELECT * FROM morador"
    console.log(request);
    connection.query(query, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "sucesso",
                    data: results
                })
        } else {
            response
                .status(500)
                .json({
                    success: false,
                    message: err,
                    data: results
                })
        }
    })

})


app.delete('/morador/:id', (request, response) => {
    const id = request.params.id; 
    const query = "DELETE FROM morador WHERE id = ?";

    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Erro na consulta:', err); 
            return response.status(500).json({
                success: false,
                message: "Erro ao deletar o morador.",
                error: err
            });
        }

        if (results.affectedRows > 0) {
            return response.status(204).send(); 
        } else {
            return response.status(404).json({
                success: false,
                message: "Morador não encontrado."
            });
        }
    });
});


app.put('/morador/:id', (request, response) => {
    let params = Array(
        request.body.nome,
        request.body.bloco,
        request.body.email,
        request.body.telefone,
        request.body.placa,
        request.body.cor_modelo,
        request.body.vaga,
        request.params.id
    );

    let query = "UPDATE morador SET nome = ?, bloco = ?, email = ?, telefone = ?, placa = ?, cor_modelo = ?, vaga = ? WHERE id = ?";
    connection.query(query, params, (err, results) => {
        if (results) {
            response.status(201).json({
                success: true,
                message: "Sucesso",
                data: results
            })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Sem sucesso",
                    data: err
                })
        }
    });
})

