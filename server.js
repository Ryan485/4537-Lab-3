const http = require("http");
const url = require("url");
const utils = require("./modules/utils");
const messages = require("./lang/en.json");

class ServerApp {
    constructor(port) {
        this.port = port;
        this.server = http.createServer(this.handleRequest.bind(this));
    }

    
}