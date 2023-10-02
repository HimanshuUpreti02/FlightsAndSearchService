const express = require("express");
const bodyParser = require('body-parser');

const { PORT } = require("./config/serverConfig")

const apiRoutes = require("./routes/index");

const setUpAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/api" , apiRoutes);

    app.listen(PORT, async() =>{ 
        console.log(`Server started at port ${PORT}`);
    })
}

setUpAndStartServer();