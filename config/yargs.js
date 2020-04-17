const opts = {
    base: {
        demand: true.value,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    },
    crearArchivo: {
        alias: 'a',
        default: false
    }
}

const argv = require('yargs')
    .command('listar', 'Imprimen en consola la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv

}