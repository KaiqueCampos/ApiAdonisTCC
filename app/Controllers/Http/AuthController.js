'use strict'

const User = use('App/Models/User');

class AuthController {

  async register({ request }) {

    // Request input from page
    const data = request.only(["username", "email", "password"]);

    // Save user in database
    const user_data = await User.create(data);
    return user_data
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
}

module.exports = AuthController
