import express from "express";
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hmm");
});
app.listen({ port: PORT }), () => {
    console.log(`localhost: ${PORT}에서 실행`);
};