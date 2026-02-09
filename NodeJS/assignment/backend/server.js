const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8000;
const FILE_PATH = path.join(__dirname, "data.txt");

const server = http.createServer((req, res) => {

  // 🔹 CORS Headers (Important for React)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  // =========================
  // CREATE FILE (POST)
  // =========================
  if (req.method === "POST" && req.url === "/create-file") {

    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const parsed = JSON.parse(body);
        const content = parsed.content || "";

        fs.writeFile(FILE_PATH, content, (err) => {
          if (err) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Error creating file" }));
          } else {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "File created successfully" }));
          }
        });

      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Invalid JSON" }));
      }
    });
  }

  // =========================
  // READ FILE (GET)
  // =========================
  else if (req.method === "GET" && req.url === "/read-file") {

    fs.readFile(FILE_PATH, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "File not found" }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ content: data }));
      }
    });
  }

  // =========================
  // INVALID ROUTE
  // =========================
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }

});

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
