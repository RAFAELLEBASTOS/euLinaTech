const UserSchema = require('../models/userModel')

const getAll = async (request, response) => {
  try {
    const user = await UserSchema.find();
    response.status(200).json(user);
  } catch (error) {
    response.status(500).json({
      messagem: error.message
    });
  }
}

const getById = async (request, response) => {
  try {
    const UserFind = await UserSchema.findById(req.params.id);
    if (UserFind) {
      response.status(200).json(UserFind);
    }
  } catch (error) {
    response.status(500).json({
      mensagem: error.message
    })
  }
}

const created = async (request, response) => {
  try {
    const user = new UserSchema({

      Nome: req.body.Nome,
      Email: req.body.Email,
      Telefone: req.body.Telefone,
      País: req.body.País,
      Estado: req.body.Estado,
      Cidade: req.body.Cidade
    })

    const saveUser = await user.save();
    response.status(201).json({
      user: saveUser
    })
  } catch (error) {
    response.status(500).json({
      mensagem: error.message
    })
  }
}



module.exports = {
  getAll,
  getById,
  created
  
}