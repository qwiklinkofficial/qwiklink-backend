import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

// Respond at root "/"
app.get('/', (req, res) => {
  res.json({ message: 'pong' });
});

// Optional: also keep /ping
app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Qwiklink backend running on http://0.0.0.0:${PORT}`);
});
