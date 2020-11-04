const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
 
// Comando add
yargs.command('add','adiciona uma nova nota.', function(){
        console.log('Adding notes...')
    })

// Comando remove
yargs.command('remove','Remover uma nova nota.', function(){
        console.log('Removing notes...')
    })

// Comando list
yargs.command('list','Listar as notas.',function(){
        console.log('Listing notes...')
    })

// Comando read
yargs.command('read','Ler uma nota.',function(){
        console.log('Reading notes...')
    })

yargs.argv



