const opts = {
    base: {
        demand: true,
        alias: 'b',
        describe:'Base de la tabla',
    },
    limite: {
        alias: 'l',
        default: 10,
        describe:'Limite de la tabla'
    },
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;
module.exports = { argv }
/*
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es La base de La tabla de multiplicar.'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Este es el numero hasta donde quiere la tabla.'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Nuestra ta tabla en consola'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un nümero'
        }
        return true;
    })
    .argv;
module.exports = argv;*/
