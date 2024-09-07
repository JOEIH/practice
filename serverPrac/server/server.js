//import express 
const express = require("express");
//server 만들기
const app = express();

//body-parser
app.use(express.json());

const cors = require("cors");
app.use(cors());

const index = require("./router/index");

app.use("/", index);

app.listen(4000, () => console.log("Server is running on 127.0.0.1:4000"))