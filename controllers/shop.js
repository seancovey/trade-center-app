module.exports.getIndex = (req, res, next) => {
    // Product.findAll()
    //   .then(products => {
    //     res.render('shop/index', {
    //       prods: products,
    //       pageTitle: 'Shop',
    //       path: '/'
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    res.render('../views/shop/index', {
             prods: [{"id":"123245","title":"A Book","imageUrl":"https://www.publicdomainpictures.net/pictures/10000/velka/1-1210009435EGmE.jpg","description":"This is an awesome book!","price":"19"},{"id":"0.41607315815753076","title":"fasfd","imageUrl":"fdasfs","description":"fadsfads","price":"12"}],
              pageTitle: 'Shop',
              path: '/'
            });
  };
  