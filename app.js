//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer.js')
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('listar');
        break;
    case 'actualizar':
        break;
    default:
        break;
}