import http = require("http");
import dotenv = require("dotenv");
import App from "./app";

//INIT ENVIRONMENT VARS
dotenv.config();

const { APP_PORT } = process.env;

const server = http.createServer(App);

server.listen(APP_PORT);

server.on(
  "listening",
  (): void => {
    console.log(`API has been started in port ${APP_PORT}!`);
  }
);

server.on(
  "error",
  (error: NodeJS.ErrnoException): void => {
    console.log(error.message);
  }
);
