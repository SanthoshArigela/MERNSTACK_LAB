const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true })); // middleware to read form data
// Form page
app.get("/", (req, res) => {
res.send(`
<h2>Student Form</h2>
<form method="POST" action="/submit">
Name: <input type="text" name="name"><br><br>
Email: <input type="email" name="email"><br><br>
<button type="submit">Submit</button>
</form>
`);
});
// Handle form submission
app.post("/submit", (req, res) => {
const name = req.body.name;
const email = req.body.email;
res.send(`
<h2>Form Data Received</h2>
<p>Name: ${name}</p>
<p>Email: ${email}</p>
`);
});
// Server
app.listen(3000, () => {
console.log("Server running on http://localhost:3000");
});