const products = require('../data/products')
module.exports = {
    index : (req, res) => {
        res.render('index', {
          title: 'Home',
          products
        });
      }
}