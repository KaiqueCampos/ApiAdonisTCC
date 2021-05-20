'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('phoneNumber', 20)
      table.string('adress', 200)
      table.string('cep', 20)
      table.string('height', 7)
      table.string('weight', 7)
      table.integer('age', 3)
      table.string('chronicDisease', 500)
      table.string('imagePerfil', 10000)
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
