const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
let employees = [];
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.post('/register', (req, res) => {
 employees.push(req.body);
 res.json({ message: 'Employee registered successfully!' });
});
app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});