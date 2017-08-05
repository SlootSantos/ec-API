const shop_one = {
  CLIENT_ID : 'dwfun8ekseCvZ9hERZrxNOfdyjYhBTfRaiyXSNcM',
  CLIENT_SECRET: 'eVaUObvR0bGrdZhedT0BC15PWfSIBZcka6rYjy32',
  STORE_ID: '1352f9a6500079ff3e9b47ad13332ed8'
};

const shop_two = {
  CLIENT_ID : 'UtvyOiRAn6eRmaOTAf0pLwpR4l0T1SlIZ9pf9EIZ5Z',
  CLIENT_SECRET: '19ctQ0nVI16h8JhtZJmrA63U6LbLfujAnXZ9wBIbvj',
  STORE_ID: 'a30d4993b3efe2b382f15513a397bb31'
};

const shop_three = {
  CLIENT_ID : 'UtvyOiRAn6eRmaOTAf0pLwpR4l0T1SlIZ9pf9EIZ5Z',
  CLIENT_SECRET: '19ctQ0nVI16h8JhtZJmrA63U6LbLfujAnXZ9wBIbvj',
  STORE_ID: 'a30d4993b3efe2b382f15513a397bb31'
};

exports.getStore = function(storeId) {

  let stores = [shop_one, shop_two];
  let store;
  for (var i = 0; i < stores.length; i++) {
    if (stores[i].STORE_ID === storeId) store = stores[i];
  }
  return store;
};
