const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
res.render('index', {
name: "Manikanta",
course: "MERN Stack"
});
});
app.listen(3000, () => {
console.log("Server running on http://localhost:3000");
});