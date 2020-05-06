//01 - Maneira clássica de escrever funções em JavaScript
function log(value){
    console.log(value);
}

//log('Test');

//02 - Outra forma de usar funções eram as funções anônimas
var log1 = function(value){
    console.log(value);
}

//log1('Teste1')

//03 - Usando return
var sum = function(a, b){
    return a + b;
};

//console.log(sum(5, 5));

//04 - Com o ecma6 nasceu as Arraw Functions
//são funções anônimas, ou atribuidas a variáveis ou 
//passadas como parâmetros
var sum1 = (a , b) => a + b; // neste caso não precisa usar return

var sum2 = (a, b) => { // no caso de definir var etc precisa usar o return
    return a + b;
} 
//console.log(sum1(5, 15));
//console.log(sum2( 20, 25));

//05 - Se tiver apenas 1 argumento podemos omitir os parênteses.
var sum3 = a => a + 5;
//console.log(sum3(90));

//06 - No caso de destruction
var sum4 = ({ a }) => a;

//console.log(sum4(20));

//07 - Arrow function como hash operator
var sum5 = (...a) => a;
//console.log(1 ,2 ,4);

//08 - Arrow function com default values
var sum6 = (a = 5) => a + 10;

//console.log(sum6());

//09 - Declarando um objeto literal
var obj = {
    name: 'Genival',
    idade: 40
};
obj.idade = 41;
//console.log(`O nome do sujeito é ${obj.name} e tem a idade de ${obj.idade}`);

// 10 - Retornando objetos nas Arrow functions
var createObj = () => ({nome: 'Genival' , idade: 40});

//console.log(createObj());

//11 - Gerando objeto de uma função através de NEW (função construtora)
function Car(){
    this.name = "Genival";
    this.idade = 40;
    this.endereco = 'Rua 77';
}

//console.log(new Car());

//12 - Podemos usar a função antes de defini-la.
//log2('Genival Silva');

function log2(value){
    console.log(value);
}

//13 - Objetos com métodos::
var obj10 = {
    showContext: function showContext(){
        console.log(this);
    },
    log: function log(){
        console.log(value);
    }
};

//obj10.showContext();

//14 - setTimeout fora de contexto
var obj11 = {
    showContext: function showContext(){
        this.log('Teste'); //chamando a função do próprio objeto
        setTimeout(function() {
        this.this.log('after 1000ms');
    }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
};

//obj11.showContext();

//15 - Fixar o contexto na função
var obj12 = {
    showContext: function showContext(){
        this.log('Teste'); //chamando a função do próprio objeto
        setTimeout(function() {
            this.log('after 1000ms');
        }.bind(this), 1000);
    },
    log: function log(value){
        console.log(value);
    }
};
//obj12.showContext();

//16 - Usando ArrowFunction o problema acima de contexto se resolve
var obj13 = {
    showContext: function showContext(){
        this.log('Teste'); //chamando a função do próprio objeto
        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
};
obj13.showContext();