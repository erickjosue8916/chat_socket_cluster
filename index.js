const express = require("express")
const app = express()
const path = require("path")
const http = require("http")
const socketClusterServer = require('socketcluster-server');

const port = process.env.PORT || "5000";

app.use(express.static(path.join(__dirname, "public")))
app.get("/", (req, res) => {
  return res.json("hola")
})

const httpServer = http.createServer(app)
let agServer = socketClusterServer.attach(httpServer);

httpServer.listen(port, () => console.log(`Server running on port ${port}`))