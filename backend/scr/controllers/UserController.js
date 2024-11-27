// Simulando um banco de dados em memória para armazenar os usuários
let users = []; 

module.exports = {
    // Função para criar um novo usuário
    create(req, res) {
        // Desestruturação dos dados enviados no corpo da requisição
        const { nome, dataNascimento, cidadeNascimento, telefone } = req.body;

        // Validação simples para verificar se todos os campos foram preenchidos
        if (!nome || !dataNascimento || !cidadeNascimento || !telefone) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
        }

        // Criando um objeto para o novo usuário
        const newUser = {
            id: users.length + 1, // Gerando um ID único baseado no tamanho do array
            nome,
            dataNascimento,
            cidadeNascimento,
            telefone,
        };

        // Salvando o usuário no "banco de dados" (array)
        users.push(newUser);

        // Retornando a resposta com os dados do usuário criado
        return res.status(201).json({
            message: 'Usuário criado com sucesso!',
            user: newUser,
        });
    },

    // Apenas para conferência (opcional): função para listar todos os usuários
    list(req, res) {
        return res.status(200).json(users);
    },
};
