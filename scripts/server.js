const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('.'));

let employees = [];

app.post('/register', (req, res) => {
  employees.push(req.body);
  res.json({ message: 'Employee registered successfully!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
