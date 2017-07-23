const cart = require('./db/cart.json');
const album = require('./db/album.json');

const db = {
  cart,
  album,
};

module.exports = () => db;