const http = require("http");
const url = require("url");
const utils = require("./modules/utils");
const messages = require("./lang/en.json");

class ServerApp {
    constructor(port) {
        this.port = port;
        this.server = http.createServer(this.handleRequest.bind(this));
    }

    start() {
        this.server.listen(this.port, () => {
            console.log(`Server running at http://localhost:${this.port}`);
        });
    }

    handleRequest(req, res) {
        const parsedUrl = url.parse(req.url, true);
        const path = parsedUrl.pathname;
        const name = parsedUrl.query.name;

        if (path === "/COMP4537/labs/3/getDate/") {
            this.handleGetDate(name, res);
            return;
        }

        // Default response for other routes
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end(`<p style="color:red;">404 Not Found</p>`);
    }

    handleGetDate(name, res) {
        if (!name) {
            res.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
            res.end(`<p style="color:red;">Missing query string: ?name=YourName</p>`);
            return;
        }

        const dateStr = utils.getDate();
        const greeting = messages.greeting.replace("%1", name);

        const html = `<p style="color:blue;">${greeting} ${dateStr}</p>`;

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(html);
    }
}

const PORT = process.env.PORT || 3000;
new ServerApp(PORT).start();
