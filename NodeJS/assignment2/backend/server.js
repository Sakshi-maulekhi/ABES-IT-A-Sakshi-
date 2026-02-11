const http = require("http");
const os = require("os");

const server = http.createServer((req, res) => {
  if (req.url === "/api/os-info") {

    const osData = {
      platform: os.platform(),
      userInfo: os.userInfo(),
      arch: os.arch(),
      freeMemory: os.freemem(),
      totalMemory: os.totalmem(),
      uptime: os.uptime(),
      homeDir: os.homedir(),
      hostName: os.hostname(),
    };

    res.writeHead(200, {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", // CORS fix
    });

    res.end(JSON.stringify(osData));
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
