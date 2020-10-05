import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Matheus", 11122233309);
const cliente2 = new Cliente("Bruna", 88822233309);

const contaCorrenteMatheus = new ContaCorrente(1001, cliente1);
contaCorrenteMatheus.depositar(500);
contaCorrenteMatheus.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// console.log(contaPoupanca);

const contaSalario = new ContaSalario(cliente2);
contaSalario.depositar(100);
contaSalario.sacar(10);
console.log(contaSalario);

