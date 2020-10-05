import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

// const cliente1 = new Cliente("Matheus", 11122233309);
// const cliente2 = new Cliente("Bruna", 88822233309);

// const contaCorrenteMatheus = new ContaCorrente(1001, cliente1);
// contaCorrenteMatheus.depositar(500);
// contaCorrenteMatheus.sacar(100);

// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// // console.log(contaPoupanca);

// const contaSalario = new ContaSalario(cliente2);
// contaSalario.depositar(100);
// contaSalario.sacar(10);
// console.log(contaSalario);

//exemplo de polimorfismo, o js esta tratando objetos diferentes de maneira semelhante
//o sistema de autenticacao recebe funcionario ou cliente para autenticacao

const diretor = new Diretor("Bruna", 10000, 123456789);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Matheus", 9000, 321456789);
gerente.cadastrarSenha("654321");

const gerenteEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const diretorEstaLogado = SistemaAutenticacao.login(gerente, "654321");

console.log(diretorEstaLogado, gerenteEstaLogado);

const cliente = new Cliente("Bruma", 67482929287, "987");
const clienteEstalogado = SistemaAutenticacao.login(cliente, "987");
console.log(clienteEstalogado);