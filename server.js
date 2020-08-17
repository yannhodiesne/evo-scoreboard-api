const pkg = require("./package.json");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 80;

const app = express();

// Parse application/json requests
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send(`${pkg.name} version ${pkg.version} - ${pkg.description}`);
});

// Look for app/routes folder
const routesPath = require("path").join(__dirname, "app/routes");

// Register all routes in app/routes
require("fs").readdirSync(routesPath).forEach(file => {
    require("./app/routes/" + file)(app);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
