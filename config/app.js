const { urlencoded, json } = require("express");
const express = require("express");

const app = express();

app.use( json() );
app.use( urlencoded({ extended: true }) );

app.set( "port", process.env.PORT || 3000 );

module.exports = app;
