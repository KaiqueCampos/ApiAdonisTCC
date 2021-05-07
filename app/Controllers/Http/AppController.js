'use strict'

const User = use('App/Models/User');

class AppController {
  async index({auth, response}) {
    try {
      //Get user informations
      await auth.check()
      const user = await auth.getUser()
      return user

    } catch(error){
      response.send(error)
    }
  }
}


module.exports = AppController
