// exercicio 1
/*let soma = 0;
for (let index = 0; index <= 50; index +=1){
    soma += index ;
}
console.log('A soma total de 1 a 50 é: ' + soma);
// exercico 2
let divisiveis = 0;
for (let index1 = 2; index1 <= 150; index1 +=1){
    if (index1 %3 == 0){
        divisiveis += 1
    }
}
    if (divisiveis === 50){
        console.log('Mensagem Secreta');
    }
console.log(divisiveis);*/
//exercicio 3

let pessoa1 = Math.floor(Math.random() * (4 - 1) + 1);
let pessoa2 = Math.floor(Math.random() * (4 - 1) + 1);

if (pessoa1 === pessoa2){
    console.log('A Tie')
} else if (pessoa1 == 1 && pessoa2 == 2 
            || pessoa1 == 2 && pessoa2 == 3 
            || pessoa1 == 3 && pessoa2 == 1) console.log('Player 1 won')
else if (pessoa2 == 1 && pessoa1 == 2 
            || pessoa2 == 2 && pessoa1 == 3 
            || pessoa2 == 3 && pessoa1 == 1) console.log('Player 2 won')