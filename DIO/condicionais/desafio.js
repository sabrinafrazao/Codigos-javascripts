/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
 */


const tipoCombustivel = 'etanol';

const precoEtanol = 5.70;
const precoGasolina = 5.90;
const gasto_km_litros = 12;
const Distância = 100;

const litros_consumidos = Distância / gasto_km_litros;

if(tipoCombustivel === 'etanol') {
    const valorGasto = litros_consumidos * precoEtanol;
    console.log('O valor gasto para realizar a viagem: R$ ', valorGasto.toFixed(2))   

} else if (tipoCombustivel === 'gasolina') {
    const valorGasto = litros_consumidos * precoGasolina;
    console.log('O valor gasto para realizar a viagem: RS ', valorGasto.toFixed(2))
}