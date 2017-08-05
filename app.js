'use strict';

const SwaggerExpress = require('swagger-express-mw');
const { authenticateMoltin } = require('./api/middleware/authenticate_moltin');
const { checkStoreId } = require('./api/middleware/check_store_id');
const app = require('express')();
const cookieParser = require('cookie-parser');

const config = {
  appRoot: __dirname // required config
};

app
.use(cookieParser())
.use(checkStoreId)
.use(authenticateMoltin);



SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  const port = process.env.PORT || 10010;
  app.listen(port);
});




module.exports = app; // for testing
