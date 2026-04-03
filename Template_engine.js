const express = require('express');
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');
// Route to render template
app.get('/', (req, res) => {
const user = {
name: "Manikanta",
course: "ExpressJS"
};
res.render('home', { user });
});
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
