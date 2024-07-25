// function saudacao(nome){
//     alert(`Ola, ${nome}`);
// }

// function chamadaCallback(callback){
//     let nome = prompt('Por favor digite seu nome');
//     callback(nome);
// }

// chamadaCallback(saudacao)

// const numero = parseInt("3.14");
// console.log(numero)

// const decimal = parseFloat(42);
// console.log(decimal);

// const pi = 3.14159
// console.log(pi.toFixed(2))

// Q1
// function mutiplicar(a,b){
//     return a * b;
// }

// console.log(mutiplicar(10,3))

// Q2
// function contarVogais(palavra){
//     let vogais = 0;
//     let i = 0
//     while(i < palavra.length){
//         if(palavra[i] == 'a' || palavra[i] == 'e' ||
//             palavra[i] == 'i' || palavra[i] == 'o' || palavra[i]
//             == 'u'){
//                 vogais += 1;
//             }
//             i += 1;
//         }
//         return vogais;
    
// }

// console.log(contarVogais('goiaba'))

// Q3
// function converterTemperatura(celsius, callback) {
//     return callback(celsius);
// }

// function celsiusParaFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// }

// let temperaturaCelsius = Number(prompt('Digite a temperatura em celsius'));
// let temperaturaFahrenheit = converterTemperatura(temperaturaCelsius, celsiusParaFahrenheit);

// console.log(`${temperaturaCelsius}°C é igual a ${temperaturaFahrenheit}°F`);

// Q4
// function cubo(numero,callback){
//     return callback(numero);
// }

// function conta(numero){
//     return numero * numero * numero;
// }
// let numero = Number(prompt('Digite um numero para saber o cubo dele'))
// let cubo1 = cubo(numero,conta)
// console.log(cubo1)



