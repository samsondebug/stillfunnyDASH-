import 'dotenv/config';
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.get('/health', (_req, res) => res.json({ ok: true }));

const port = Number(process.env.PORT || 4000);
app.listen(port, '0.0.0.0', () => console.log(`Agent running on :${port}`));
