/** Start server for jobly. */


const app = require('./app');
const express = require("express");
const path = require('path');
const { PORT } = require("./config");

app.listen(PORT, function () {
  console.log(`Server starting on port ${PORT}!`);
});
