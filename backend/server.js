const app = require('./src/app');
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

const connectDB = require('./src/config/db');
connectDB();
