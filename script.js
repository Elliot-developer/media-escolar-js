var mat  = Number(prompt("Qual a nota de matematica:"));
var port = Number(prompt("Qual a nota de portugues"));
var cien = Number(prompt("Qual a nota de ciencias:"));
var media = (mat + port + cien)/3 

console.log ("--------------------------");
     console.log ("As notas são:");
     console.log ("Matematica:" + mat +" ");
     console.log ("Portugues:" + port +"");
     console.log ("Ciencias:" + cien +"");
console.log ("--------------------------");

     console.log ("" + media + "");

// if (media >= 50) {
//      console.log ("Você passou de ano carai");
// }

// else {
//      console.log ("Se ferrou!");
// }

var result = window.document.querySelector ("#resultado");

resultado.innerHTML = media;
