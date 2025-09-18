//const funcoes = require('./funcoesmatematicas');
//const calculadora_idade = require ('./calculadora_idade');
import {soma, subtrai, multiplica, divide} from './funcoesmatematicas.js';
import * as calculadora from './calculadora_idade.js';


console.log(`Soma: ${soma(5, 3)}`);


console.log(`Subtração: ${subtrai(10, 4)}`);

console.log(`Multiplicação: ${multiplica(5, 5)}`);

console.log(`Divisão: ${divide(169, 13)}`);

console.log(calculadora.idade("joão", 2000, 2050));