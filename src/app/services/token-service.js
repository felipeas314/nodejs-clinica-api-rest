const jwt = require('jsonwebtoken');

exports.createToken = (data) => {
  return new Promise((resolve, reject) => {
    jwt.sign({ user_id: data.id }, 'super_secret', function (err, token) {
      if(err) return reject(err);

      return resolve(token);
    });
  });

}

exports.verifyToken = (token) => {
  return new Promise((resolve,reject) => {
    jwt.verify(token,'super_secret',function(err,decoded){
      if(err) reject(err);

      return resolve(decoded);
    })
  });
}