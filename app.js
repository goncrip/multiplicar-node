const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//console.log(argv);
let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base).then(archivo => {
            console.log(`Archivo creado: ${archivo}`.green);
        }).catch(e => {
            console.log(e);
        });
        break;
    case 'crearArchivo':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado: ${archivo}`);
        }).catch(e => {
            console.log(e);
        });
        break;
    default:
        console.log('No reconocido');
        break;
}
//console.log(process.argv);
//let argv2 = process.argv;

//console.log(argv.base);
//console.log(argv.limite);
//console.log(argv2);