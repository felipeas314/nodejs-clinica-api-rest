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

async function listaUsuarios(req, res) {

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

exports.criaUsuario = criaUsuario;
exports.listaUsuarios = listaUsuarios;