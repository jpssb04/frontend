let users = ['Alice', 'Bob', 'Charlie'];

for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

const filtrarImpares = numeros => numeros.filter(num => num % 2 !== 0);

const numeros = [1, 2, 3, 4, 5, 6];
const impares = filtrarImpares(numeros);

console.log(impares);