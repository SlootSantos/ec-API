function getProducts(req, res) {
  let { Moltin, identifiers } = req;

  Moltin.Products.With('files').All()
  .then(product => {
    res.json(product)
  })
}

function putToCart(req, res) {
  let { Moltin, identifiers } = req;
  let productId = req.swagger.params.productId.value;

  Moltin.Cart.AddProduct(productId, 3, identifiers.cartsId)
  .then((item) => {
    if (item.errors) return res.status(400).json(item.errors[0].detail);

    res.json(item)
  })
  .catch(err => {
    console.log(err);
    res.status(400).json(err)
  });
}

function getCart(req, res) {
  let { Moltin, identifiers } = req;

  Moltin.Cart.Items(identifiers.cartsId)
  .then(cart => {
    res.json(cart)
  });
}

function checkout(req, res) {
  let { Moltin } = req;

  Moltin.Cart.Checkout({
    customer: {
      name: 'John Doe',
      email: 'john@doe.co'
    },
    billing_address: {
      first_name: 'John',
      last_name: 'Doe',
      line_1: '123 Sunny Street',
      line_2: 'Sunnycreek',
      county: 'California',
      postcode: 'CA94040',
      country: 'US'
    },
    shipping_address: {
      first_name: 'Jon',
      last_name: 'Doe',
      line_1: '123 Sunny Street',
      line_2: 'Sunnycreek',
      county: 'California',
      postcode: 'CA94040',
      country: 'US'
    }
  })
  .then(order => {
    console.log(order);
    Moltin.Orders.Payment(order.data.id, {
    gateway: "stripe",
    method: "purchase",
    first_name: "John",
    last_name: "Doe",
    number: "4242424242424242",
    month: "09",
    year: "2017",
    verification_value: "123"
 })
    .then(payment => {
      console.log(payment);
      res.json(payment)
    })
    .catch(err => {
      console.log(err);
    })
  })
}



module.exports = {
  getProducts,
  putToCart,
  checkout,
  getCart
};
