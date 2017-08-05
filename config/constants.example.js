const shop_one = {
  CLIENT_ID : '',
  CLIENT_SECRET: '',
  STORE_ID: ''
};

const shop_two = {
  CLIENT_ID : '',
  CLIENT_SECRET: '',
  STORE_ID: ''
};

const shop_three = {
  CLIENT_ID : '',
  CLIENT_SECRET: '',
  STORE_ID: ''
};

exports.getStore = function(storeId) {

  let stores = [shop_one, shop_two];
  let store;
  for (var i = 0; i < stores.length; i++) {
    if (stores[i].STORE_ID === storeId) store = stores[i];
  }
  return store;
};
