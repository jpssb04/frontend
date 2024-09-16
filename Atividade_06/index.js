const aluno = {
    nome: 'João Pedro',
    idade: '20',
    curso: 'Ciência da Computação',
    notas: [8.8, 6.8, 10.0]
};

console.log("Nome: " + aluno.nome)
console.log("Primeira nota: " + aluno.notas[0])

aluno.idade = 2
aluno.notas.push(7.5)

let alunoJson = JSON.stringify(aluno)
console.log("Stringify: " + alunoJson)

alunoJson = JSON.parse(alunoJson)

console.log("Propriedades:")
for (let propriedade in aluno) {
    console.log(propriedade + ': ' + aluno[propriedade]);
}

let soma = 0
for (let i in aluno.notas) {
    soma += aluno.notas[i]; 
}

media = soma / aluno.notas.length
console.log("Média: " + media)

aluno.endereco = {
    rua: 'Epitácio Pessoa',
    cidade: 'João Pessoa',
    estado: 'Paraíba'
};

console.log("Cidade: " + aluno.endereco.cidade)
console.log("Estado: " + aluno.endereco.estado)

const alunos = [
    {
        nome: 'João Pedro',
        idade: 22,
        curso: 'Ciência da Computação',
        notas: [8.8, 6.8, 10, 7.5],
        endereco: {
            rua: 'Epitácio Pessoa',
            cidade: 'João Pessoa',
            estado: 'Paraíba'
        }
    },
    {
        nome: 'Maria Eduarda',
        idade: 21,
        curso: 'Sistemas para Internet',
        notas: [9.0, 7.4, 8.6, 7.0],
        endereco: {
            rua: 'Presidente Tancredo Neves',
            cidade: 'João Pessoa',
            estado: 'Paraíba'
        }
    },
    {
        nome: 'Pedro Henrique',
        idade: 23,
        curso: 'Sistemas de Informação',
        notas: [7.8, 6.6, 9.2, 8.0],
        endereco: {
            rua: 'José Américo de Almeida',
            cidade: 'João Pessoa',
            estado: 'Paraíba'
        }
    }
];

const calcularMedia = (notas) => {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
};

console.log("Alunos com média acima de oito:")
const alunosAcimaDeOito = alunos.filter((aluno) => calcularMedia(aluno.notas) > 8);
console.log(alunosAcimaDeOito)