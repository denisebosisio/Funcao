console.log("Exibindo uma mensagem no console")
function text(){
    console.log("Olá!")
}
text();

console.log("Recebendo parâmetro")
function text(name){
    console.log(`Olá, ${name}!`);
}
text("Denise");

console.log("------")
function sobre(name, age, musicStyle){
    console.log(`Meu nome é ${name}, tenho ${age} anos e meu estilo musical preferido é ${musicStyle}.`);
}
sobre("Denise Bosisio", "22", "Pop internacional");

function culture(film, music){
    console.log(`Um clássico da comédia: ${film}. Uma música inspiradora: ${music}.`);
}
culture("As Branquelas", "The Climb - Miley Cyrus");

console.log("Triplo do valor do parâmetro:");
function mult(number, x){
    console.log(number*x);
}
mult(30, 3);
