const UserSchema = require('../models/userModel')
const bcrypt = require("bcrypt");
const { hashPassword} = require("../helpers/auth");
const jwt = require("jsonwebtoken");
const { request } = require('../app');

const getAll = async ( request, response) => {
  try {
    const user = await UserSchema.find(request.query);
    response.status(200).json(user);
  } catch (error) {
    response.status(500).json({
      messagem: error.message
    });
  }
}

const getById = async (request, response) => {
  try {
    const UserFind = await UserSchema.findById(request.params.id);
    console.log (UserFind)
      response.status(200).json(UserFind);
  } catch (error) {
    response.status(500).json({
      mensagem: error.message
    })
  }
}

const createdUser = async (request, response) => {
  try {
    const body = request.body
    const passwordHased = await hashPassword(body.password, response);
    body.password = passwordHased
    const user = new UserSchema(body);

    const newUser = await user.save()
    newUser.password = undefined;
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
    const updateUser = await UserSchema.findById(request.params.id);
    if (updateUser) {

      updateUser.name = request.body.name || updateUser.name
      updateUser.email = request.body.email || updateUser.email
      updateUser.telephone = request.body.telepone || updateUser.telephone
      updateUser.country = request.body.country || updateUser.country
      updateUser.state = request.body.state || updateUser.state
      updateUser.city = request.body.city || updateUser.city
      updateUser.cnpj = request.body.cnpj || updateUser.cnpj
      updateUser.description = request.body.description || updateUser.description
      updateUser.experiences = request.body.experiences || updateUser.experiences
      updateUser.brands = request.body.brands || updateUser.brands

      const saveUser = await updateUser.save();
      return response.status(200).json({
        menssage: "Usuário atualizado com sucesso",
        saveUser
    })
    }

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
    const deleteUser = await UserSchema.findById(request.params.id);

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
const login = async (request, response) => {

  const {email, password} = request.body;

  try{
   
  const userRequired = await UserSchema.findOne({email: email}).select('+password');

  if (!userRequired) {
    return response.status(404).json({message: "Usuário não encontrado"})
  }

  const checkPassword = await bcrypt.compare(password, userRequired.password);


  if (!checkPassword) {
    return response.status(404).json({message: "Senha incorreta"})
  }


  const secret = process.env.SECRET;

  const token = jwt.sign(
    { id: userRequired._id}, secret)

  return response.status(200).json({message: "Auth", token});
} catch(error) {
  return response.status(500).json({message: error.message})
}
}


module.exports = {
  getAll,
  getById,
  createdUser,
  updateUser,
  deleteUser,
  login


}