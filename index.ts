export default function greet({ nome, idade }: { nome: string; idade: number; }): string{
    const nomeEIdade = `Meu nome é: ${nome}, e minha é: ${idade}`;
    return nomeEIdade;
}

console.log(greet({ nome: 'Diego', idade: 29 }));