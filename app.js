const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
 
// Comando add
yargs.command({
    command:'add',
    discribe: 'adiciona uma nova nota.',
    handler: function(){
        console.log('Adding notes...')
    }
})

// Comando remove
yargs.command({
    command:'remove',
    discribe: 'Remover uma nova nota.',
    handler: function(){
        console.log('Removing notes...')
    }
})

// Comando list
yargs.command({
    command:'list',
    discribe: 'Listar as notas.',
    handler: function(){
        console.log('Listing notes...')
    }
})

// Comando read
yargs.command({
    command:'read',
    discribe: 'Ler uma nota.',
    handler: function(){
        console.log('Reading notes...')
    }
})
yargs.argv




