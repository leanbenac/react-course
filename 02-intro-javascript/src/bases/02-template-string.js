// template string

const nombre = "leandro";
const apellido = "benac";

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
${nombre}
${apellido}
${ 1 + 1}`;

console.log( nombreCompleto );


function getSaludo(nombre) {
    return 'Hola' + nombre;
}

console.log( `Èste es un texto: ${getSaludo(nombre) }`);