const notas = [10.0, 8.0, 6.5, 5.5, 9.0]
console.log("Primeira nota: " + notas[0]+ "\nSegunda nota: " + notas[4])

notas.push(7.8)
notas.shift()
console.log("Array resultante: " + notas)

notas.forEach(function(nota){
  console.log(nota);
});

const soma = notas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
const media = soma / notas.length;
console.log("Média: " + media.toFixed(1));

const notasFiltradas = notas.filter(nota => nota > 7);
console.log("Notas acima de 7: " + notasFiltradas);

notas.sort((a, b) => a - b);
console.log("Notas em ordem crescente: " + notas);

const notaIncludes = notas.includes(6.5);
console.log("Existe nota 6.5 em notas? " + notaIncludes);

const notaIndex = notas.indexOf(8);
console.log("Qual o índice da nota 8 em notas? " + notaIndex);

const notas2 = [10, 8, 7, 9, 6];
const notasAoQuadrado = notas2.map(nota => nota ** 2);
console.log("Notas ao Quadrado: " + notasAoQuadrado);