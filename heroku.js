// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const db = require('./db.js')();
console.log(db)
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 8080, () => {
  console.log('JSON Server is running');
});
