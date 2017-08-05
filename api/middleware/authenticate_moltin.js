const moltin = require('moltin');
const { getStore } = require('../../config/constants');

function authenticateMoltin(req, res, next) {
  let store = getStore(req.identifiers.storesId);
  
  if (!store) res.status(400).send('wrong Identifiers');

  let Moltin = moltin.gateway({
    client_id: store.CLIENT_ID,
    client_secret: store.CLIENT_SECRET
  });


  Moltin.Authenticate()
  .then(res => {
    console.log('Authenticated via Middleware');

    req.Moltin = Moltin;
    next();
  });
};

module.exports = {
  authenticateMoltin
};
