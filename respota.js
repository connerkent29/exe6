let listaDeCompras = ["pão", "leite", "ovos", "queijo", "frutas"];


console.log(listaDeCompras);


listaDeCompras.push("café");
console.log(listaDeCompras);


listaDeCompras.unshift("manteiga");
console.log(listaDeCompras);

//////////////////////////////////////////////////////////////////////////////////////////////

let itemRemovido = listaDeCompras.pop();
let primeiroItemRemovido = listaDeCompras.shift();

console.log("Lista de Compras após as remoções:");
console.log(listaDeCompras);

console.log("Último item removido:", itemRemovido);
console.log("Primeiro item removido:", primeiroItemRemovido);
/////////////////////////////////////////////////////////////////////////////////////////////

listaDeCompras.splice(1,2)
console.log(listaDeCompras)

/////////////////////////////////////////////////////////////////////////////////////////////

listaDeCompras.splice(1, 1, "chocolate");
console.log("Lista após substituir o segundo item por 'chocolate':", listaDeCompras);
listaDeCompras.splice(2, 1, "biscoitos", "suco");
console.log("Lista após modificações adicionais:", listaDeCompras);
console.log(listaDeCompras)

//////////////////////////////////////////////////////////////////////////////////////////////
