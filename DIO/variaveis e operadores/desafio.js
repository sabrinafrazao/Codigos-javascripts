/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/ 

const preco_combustivel = 5.79;
const gasto_km_litros =  12;
const Distância = 100;

const litros_consumidos = Distância/gasto_km_litros;
const valor = litros_consumidos * preco_combustivel;

console.log("Valor gasto na viagem : ", valor.toFixed(2))