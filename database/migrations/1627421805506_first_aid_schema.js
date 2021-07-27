'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FirstAidSchema extends Schema {
  up () {
    this.create('first_aids', (table) => {
      table.increments()
      table.text('name', 100).notNullable().unique()
      table.text('procedure',10000).notNullable()
      table.text('videoLink',1500).notNullable()
      table.text('thumbnail',1500).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('first_aids')
  }
}

module.exports = FirstAidSchema
