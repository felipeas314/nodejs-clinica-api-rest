const bcrypt = require('bcrypt');

const {
  Usuario
} = require('../model/usuario-model');

const {
  createToken
} = require('../services/token-service');

async function login(req, res) {

  const {
    email,
    password
  } = req.body;

  const user = await Usuario.findOne({
    where: {
      email
    }
  })

  if (!user) {
    return res.status(400).json({
      status: "NOT_FOUND",
      message: "User not found"
    });
  }

  const result = await bcrypt.compare(password, user.senha);

  if (!result) {
    return res.status(201).json({
      message: "Invalid password"
    })
  }

  const token = await createToken(user);

  res.status(200).json({
    token
  });
}

exports.login = login;