require("dotenv").config();
const app = require("./config/app");

app.use( "/api/", require("./routes/userRoutes") );

app.listen( app.get("port"), console.log(`Server on port ${app.get("port")}`) );

