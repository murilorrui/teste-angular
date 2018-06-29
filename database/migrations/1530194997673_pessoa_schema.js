'use strict'

const Schema = use('Schema')

class PessoaSchema extends Schema {
  up () {
    this.create('pessoas', (table) => {
      table.increments()
      table.string('nome')
      table.string('sobrenome')
      table.string('sexo')
      table.string('profissao')
      table.string('formacao')
      table.string('email')
      table.string('cidade')
      table.string('estado')
      table.timestamps()
    })
  }

  down () {
    this.drop('pessoas')
  }
}

module.exports = PessoaSchema
