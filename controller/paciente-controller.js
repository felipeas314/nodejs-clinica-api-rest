const User = require('../model/user-model');

class UserController {

  constructor(){

  }

  index(req, res) {

    res.json("ok");
  }
  
}

module.exports = new UserController();
