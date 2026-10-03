const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un numero entero positivo: ", (entrada) => {

    let numero = parseInt(entrada);

    if (isNaN(numero) || numero < 2) {
        console.log("Error: debe ingresar un numero entero mayor o igual a 2.");
        rl.close();
        return;
    }

    let contador = 2;

    console.log("Numeros pares:");

    while (contador <= numero) {
        console.log(contador);
        contador += 2;
    }

    rl.close();
});
