const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el numero de filas: ", (entradaFilas) => {

    let filas = parseInt(entradaFilas);

    rl.question("Ingrese el numero de columnas: ", (entradaColumnas) => {

        let columnas = parseInt(entradaColumnas);

        if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
            console.log("Error: las filas y columnas deben ser numeros mayores a 0.");
            rl.close();
            return;
        }

        console.log("Coordenadas de la cuadricula:");

        for (let fila = 1; fila <= filas; fila++) {

            for (let columna = 1; columna <= columnas; columna++) {
                console.log("[" + fila + ", " + columna + "]");
            }
        }

        rl.close();
    });
});
