'use strict'

const User = use('App/Models/User');

class AuthController {

  async register({ request }) {
    try {

      // Request input from page
      const data = request.only(["username", "email", "password", "imagePerfil"]);

      // Save user in database
      const user_data = await User.create(data);
      return user_data
    } catch (error) {
      console.log(error)

    }

  }

  async login({ request, auth, response }) {

    // Variables
    const { email, password } = request.all()

    try {

      //Authenticate and Token generation
      await auth.attempt(email, password)
      const user = await User.findBy('email', email)
      const acessToken = await auth.generate(user)

      return response.json(acessToken)

    } catch (error) {
      console.log(error);
    }
  }

  async update({ request, response, auth }) {

    try {
      // Check user and get his informations
      await auth.check()
      const user = await auth.getUser()

      // Get data from front-end
      const data = request.only([
        'adress',
        'cep',
        'phone',
        'age',
        'weight',
        'height',
        'chronicDisease'
      ])

      user.adress = data.adress
      user.cep = data.ep
      user.phoneNumber = data.phone
      user.age = data.age
      user.weight = data.weight
      user.height = data.height
      user.chronicDisease = data.chronicDisease

      user.save()

      return response.status(200).json("Dados atualizados!")
    } catch (error) {
      return console.log(error)
    }
  }

  async show({ auth, response }) {
    try {
      //Get user informations
      await auth.check()
      const user = await auth.getUser()
      return user

    } catch (error) {
      response.send(error)
    }
  }
}

module.exports = AuthController
