const TecnicasSchema = require('../models/tecnicasModel')

const Listar = async (request, response) => {
    try {
      const tecnicas = await TecnicasSchema.find();
      res.status(200).json(tecnicas);
    } catch (error) {
      res.status(500).json({
        messagem: error.message
      });
    }
  }
  
  const GetPorId = async (request, response) => {
    try {
      const tecnicasEncontradas = await TecnicasSchema.findById(req.params.id);
      if(tecnicasEncontradas) {
        res.status(200).json(tecnicasEncontradas);
      }
    } catch (error) {
      res.status(500).json({
        mensagem: error.message
      })
    }
  }
  
  const CadastrarTecnicas = async (request, response) => {
    try {
      const tecnicas = new TecnicasSchema({
        
        Nome: req.body.Nome,
        Email: req.body.Email,
        Telefone: req.body.Telefone,
        País: req.body.País,
        Estado: req.body.Estado, 
        Cidade: req.body.Cidade
      })
    
      const salvarTecnicas = await tecnicas.save();
      res.status(201).json({
        tecnicas: salvarTecnicas
      })
    } catch (error) {
      res.status(500).json({
        mensagem: error.message 
      })
    }
  }
  
  
  
  module.exports = {
    Listar,
    GetPorId,
    CadastrarTecnicas
  }