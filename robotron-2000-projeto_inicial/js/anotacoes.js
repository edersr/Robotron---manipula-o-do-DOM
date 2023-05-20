/*Dentro do console do DevTools

document.getElementById('producao')
Aqui estamos pedindo para que o documento mostre os comandos quando buscado pelo Id "producao"

resultado = <input type="submit" value="Iniciar produção" class="producao" id="producao"></input>

document.getElementById('producao').value="Teste JavaScript"

Aqui estamos manipulando o valor(value), que inicialmente estava como Iniciar produção, e agora passa a ser "Teste JavaScript"


Document.queryselector('.producao')

Aqui o nome fica genérico, não ficando atribuido necessariamente a uma ID ou class

*/
//Criando uma variavel. Const é uma variavel que não muda de valor

//const robotron = document.querySelector("#robotron")

//Declaração de função anônima, que pode ser chamada dentro do addEventListener como funcion ou "=>", sendo chamada de função de seta
//Entendemos aqui como passar um texto como parâmetro, mas já existem parâmetros que são padrão da nossa página. Por exemplo, toda vez que um evento acontece, podemos manipular esse evento. E em uma arrow function, colocamos entre os parênteses o que usaremos, que é o evento. E colocamos no corpo da função do console.log o evento.
//robotron.addEventListener("click", (evento) => {

//Aqui é uma função declarada, possui nome e pode ser chamada mais vezes durante o código
//O que está entre parenteses será o  parâmetro da função
/*function dizOi(nome) {
    console.log("Oi " + nome)
    console.log("Bem vindo ao Robotron 2000")
}

dizOi("Pedro")*/

//textContent é para buscar o conteúdo de texto, que no caso desse html é o "+" ou "-"

//usamos queryselectorall para buscar todos os elementos da classe, caso contrário buscará só o primeiro

//parseInt transforma o peca.value em numero para operações matemáticas, caso  não, faria apenas incrementos, como 001, 0011, 00111