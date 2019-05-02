const argv = require('yargs')
    .command('crear', 'crear un elemento', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion para hacer tarea'
        }
    }).command('actualizar', 'actualiza tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion para actualizar'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'marca como completado o pendiente la tarea'

        }
    }).help().argv;

module.exports = {
    argv
}