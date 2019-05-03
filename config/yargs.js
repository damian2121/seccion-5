const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion para actualizar'
}

completado = {
    default: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'

}


const argv = require('yargs')
    .command('crear', 'crear un elemento', {
        descripcion
    }).command('actualizar', 'actualiza tarea', {
        descripcion,
        completado
    }).command('borrar', 'Borrar una tarea', {
        descripcion
    }).help().argv;

module.exports = {
    argv
}