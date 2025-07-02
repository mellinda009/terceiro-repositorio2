const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho() {
    if (tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'ancdefghijklmnopqrstuvwxyz';
const numeros = '0123456789'
const simbolos = '!@%*?';

const checkbox = document.querySelectorAll('.checkbox')

function geraSenha() {
 let alfabeto = '' ;
 if (checkbox [0].checkbox) {
    alfabeto = alfabeto + letrasMaiusculas;
 }
 if (checkbox [1].checkbox) {
    alfabeto = alfabeto + letrasMinusculas;
 }
 if (checkbox [2].checkbox) {
    alfabeto = alfabeto + numeros;
 }
 if (checkbox [3].checkbox) {
    alfabeto = alfabeto + simbolos;
 }

 console.log(alfabeto);
    let senha= '';
    for(let i=0; i < tamanhoSenha; i++){
    numeroAleatorio = Math.random()*alfabeto.length;
    senha = senha + alfabeto[numeroAleatorio]
    }
     
}

geraSenha();

function geraSenha() {

    for(let i=0; i < checklength; i++;)
        {
        
}