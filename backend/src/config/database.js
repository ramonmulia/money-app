const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.Error.messages.general.required = "O atributo '{PATH}' É OBRIGATÓRIO";
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'";
mongoose.Error.messages.Number.MAX = "O '{VALUE}' informado é maior que o limite máximo de '{MAX}'";
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'";

module.exports = mongoose.connect('mongodb://localhost/mymoney')