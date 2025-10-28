const produtosModel = require('../models/produtosModel');

module.exports = {
  formcod: (req, res) => {
    res.sendFile('produtos.html', { root: './views' });
  },
  cadastrar: (req, res) => {
    const { nome, valor_unitario, descricao, id } = req.body;
    const mensagemCadastro = produtosModel.cadastrar(id, descricao, quantidade, valor_unitario);
    res.send(mensagemCadastro);
  },
  produtos: (req, res) => {
    res.sendFile('indexprodutos.html', { root: './views' });
  }
};
