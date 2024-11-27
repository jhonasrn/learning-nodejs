const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        /**
        Criar o banco de dados e adicionar
        aqui as informações assim que que tiver

         */
        await mongoose.connect('mongodb://localhost:27017/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado ao MongoDB!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;