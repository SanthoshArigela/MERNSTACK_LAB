const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
// session middleware
app.use(session({
secret: "mysecretkey",
resave: false,
saveUninitialized: true
}));
// Home page
app.get("/", (req, res) => {
if (req.session.username) {
res.send("Welcome " + req.session.username +
"<br><a href='/logout'>Logout</a>");
} else {
res.send(`
    <h2>Login Page</h2>
<form method="POST" action="/login">
Username: <input type="text" name="username"><br><br>
<button type="submit">Login</button>
</form>
`);
}
});
app.use(express.urlencoded({ extended: true }));
// Login route
app.post("/login", (req, res) => {
const username = req.body.username;
req.session.username = username; // store session
res.cookie("user", username); // set cookie
res.redirect("/");
});
// Logout route
app.get("/logout", (req, res) => {
req.session.destroy();
res.clearCookie("user");
res.send("Logged out successfully");
});
// Server
app.listen(3000, () => {
console.log("Server running at http://localhost:3000");
});