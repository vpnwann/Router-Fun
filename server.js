const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const next = require('next');
const hostname = '0.0.0.0';
const port = 80;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use(express.json());

  const users = [
    { username: 'user1', password: '123' },
    { username: 'user2', password: '123' }
  ];

  server.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ username }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(200).json({ token });
  });

  // Default Next.js handler
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${PORT}`);
  });
});
