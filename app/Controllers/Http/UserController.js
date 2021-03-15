'use strict'
const User = use('App/Models/User')


class UserController {
  async register({ request }) {
    const user_data = request.all();
    const { email } = request.only('email');
    const { name } = request.only('name');
    const user = await User.create(user_data);

    const { token } = await auth.generate(user);


    await Mail.send('emails.welcome', user.toJSON(), (message) => {
      message
        .to(email)
        .from('obrabodorasta@gmail.com')
        .subject('Bem-vindo ao nosso projeto de TCC!')
    })

    return response.status(201).send({ token, name });
  }
}

module.exports = UserController
