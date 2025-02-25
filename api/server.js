const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.db = router.db;
server.use(auth);
server.use(router);

server.listen(process.env.PORT || 5000, () => {
  console.log("JSON Server is running");
});

module.exports = server;
