const { Usuario } = require('../model/usuario-model');
const bcrypt = require('bcrypt');

async function criaUsuario(req, res) {

  const { email } = req.body;

  const verificaEmail = await Usuario.findOne({
    where: {
      email
    }
  });

  if (verificaEmail) {
    return res.status(400).json({
      status: 'BAD_REQUEST',
      message: 'This email is already in use',
    });
  }

  const senhaHash = await bcrypt.hash(req.body.senha, 10);

  const usuario = await Usuario.create({ ...req.body, senha: senhaHash });

  res.status(201).json({
    message: 'Usuário criado com sucesso',
    status: 'CREATED'
  })
}

async function listUser(req, res) {

  const { page = 1, size = 10 } = req.params;

  const offset = (page - 1) * size;

  const usuarios = await Usuario.findAndCountAll({
    offset,
    size
  })

  res.status(200).json({
    status: 'OK',
    mensagem: 'List of users',
    quantity: usuarios.count,
    content: usuarios.rows
  })

}

async function findUserById(req, res) {

  const { id } = req.params;

  const user = await Usuario.findByPk(id);

  if (!user) {
    return res.status(400).json({
      status: 'BAD_REQUEST',
      message: 'User not exists'
    });
  }

  res.status(200).json({
    content: user,
    status: 'OK',
    data: new Date()
  });
}

async function deleteUser(req, res) {

  const { id } = req.params;

  const userExists = await Usuario.findByPk(id);

  if (!userExists) {
    return res.status(400).json({
      status: 'BAD_REQUEST',
      message: 'User not exists'
    });
  }

  await Usuario.destroy({ where: { id } });

  return res.status(200).json({
    message: 'Success',
    date: new Date()
  })
}

async function updateUser(req, res) {

  const { id } = req.params;

  const userExists = await Usuario.findByPk(id);

  if (!userExists) {
    return res.status(400).json({
      status: 'BAD_REQUEST',
      message: 'User not existss'
    })
  }

  const user = await Usuario.update({ ...req.body }, {
    where: {
      id
    }
  });

  res.status(200).json('ok');
}

exports.criaUsuario = criaUsuario;
exports.listUser = listUser;
exports.findUserById = findUserById;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;