'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Consulta extends Model {
  appointments() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Consulta
