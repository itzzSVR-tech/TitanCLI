import express from 'express';
import dotenv from "dotenv"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/health', (req, res) => res.send('OK'))

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});