const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuantas notas va a ingresar?: ", (entrada) => {

    let cantidad = parseInt(entrada);

    if (isNaN(cantidad) || cantidad <= 0) {
        console.log("Error: debe ingresar una cantidad mayor a 0.");
        rl.close();
        return;
    }

    let suma = 0;

    function pedirNota(i) {
        rl.question("Ingrese la nota " + i + ": ", (entradaNota) => {

            let nota = parseFloat(entradaNota);

            if (isNaN(nota)) {
                console.log("Error: debe ingresar un numero valido.");
                pedirNota(i);
                return;
            }

            suma += nota;

            if (i < cantidad) {
                pedirNota(i + 1);
            } else {
                let promedio = suma / cantidad;

                console.log("Suma total: " + suma);
                console.log("Promedio final: " + promedio.toFixed(2));

                rl.close();
            }
        });
    }

    pedirNota(1);
});
