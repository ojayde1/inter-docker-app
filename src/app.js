const http = require("http");

// Define the port, which should match the EXPOSE instruction in the Dockerfile
const PORT = 9000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("WELCOME TO DOCKERIZED APP 🚀 (Host: " + process.env.HOSTNAME + ")");
});

server.listen(PORT, () => {
  console.log(`Server running inside container on port ${PORT}`);
});