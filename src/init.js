const { App } = require('./server');
const config = require('config');
const PORT = config.get('server.port');

App.listen(PORT, () => {
  console.log("Server up")
});