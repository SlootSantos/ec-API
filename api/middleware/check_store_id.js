// check store ID comming from request
// extract store + cart ids
// compare to cookie storeid && replace cookie if differ from req
// break if no store id
// set cookie with storeid + cartid
function checkStoreId(req, res, next) {
  let { identifiers, headers, cookies } = req;
  let { cookie_storeIds } = cookies;

  console.log(headers);

  identifiers = cookie_storeIds
  ? {
    storesId: cookie_storeIds.split('/')[0],
    cartsId: cookie_storeIds.split('/')[1]
  }
  : {storesId: headers['store-id'], cartsId:''};


  if (identifiers.storesId && !(identifiers.storesId === headers['store-id'])) {
    identifiers = {
      storesId: headers['store-id'],
      cartsId: createCartId()
    }
  }

  if (!identifiers.storesId) return (res.status(400).send('No Store Identifier'));
  if (!identifiers.cartsId) identifiers.cartsId = createCartId();

  res.cookie('cookie_storeIds', Object.values(identifiers).join('/'));
  req.identifiers = identifiers;

  next();
}

function createCartId() {
  return id = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, () => (Math.random() * 16 | 0).toString(16));
}


module.exports = {
  checkStoreId
};
