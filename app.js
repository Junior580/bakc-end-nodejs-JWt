const express = require("express");
const jwt = require("jsonwebtoken");
const router = require("./api/routes/routes");
const conectTodatabase = require("./api/connect");

const app = express();
app.use(express.json());
app.use(router);
conectTodatabase();

const port = 3000;
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
