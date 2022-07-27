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

const createdUser = async (request, response) => {
  try {
    const user = new user(require.body);

    const newUser = await user.save()
    response.status(201).json({
      mensagem: "Cadastro criado com sucesso",
      user: newUser,
    })

  } catch (error) {
    response.status(500).json({
      mensagem: error.message,
    })
  }
}

const updateUser = async (request, response) => {
  try {
    const updateUser = await user.findById(req.params.id);
    if (updateUser) {

      updateUser.name = req.body.name || updateUser.name
      updateUser.email = req.body.email || updateUser.email
      updateUser.telephone = req.body.telepone || updateUser.telephone
      updateUser.country = req.body.country || updateUser.country
      updateUser.state = req.body.state || updateUser.state
      updateUser.city = req.body.city || updateUser.city
      updateUser.cnpj = req.body.cnpj || updateUser.cnpj
      updateUser.description = req.body.description || updateUser.description
      updateUser.experiences = req.body.experiences || updateUser.experiences
      updateUser.brands = req.body.brands || updateUser.brands
    }

    const saveUser = await user.save();
    response.status(200).json({
      menssage: "Usuário atualizado com sucesso",
      saveUser
    })
    response.status(400).json({
      message: "Usuário não Encontrado"
    })
  } catch (error) {
    response.status(404).json({
      mensagem: error.message
    })
  }
}

const deleteUser = async (request, response) => {
  try {
    const deleteUser = await use.findById(req.params.id);

    if (deleteUser == null) {
      response.status(404).json({
        message: "Usuário não encontrado."
      })
    }
    await deleteUser.delete();
    response.status(200).json({
      message: "Cadastro deletado com sucesso."
    })
  } catch (error) {
    response.status(500).json({
      message: error.message
    })
  }
}



module.exports = {
  getAll,
  getById,
  createdUser,
  updateUser,
  deleteUser

}