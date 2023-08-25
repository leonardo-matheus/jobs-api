import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();

const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'Ta funcionando!' }));

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Aplicação iniciada na porta ${PORT}`));