'use strict'

const User = use('App/Models/User');
const Medicine = use('App/Models/Medicine');

class MedicineController {

  // Register Medicine
  async register({ request, auth, response }) {

    try {

      // Get User information
      await auth.check()
      const user = await auth.getUser()

      // Request input from page
      const { name, initialDate, finalDate, time } = request.all(); // info do evento

      const data = {
        user_id: user.id,
        name: name,
        initialDate: initialDate,
        finalDate: finalDate,
        time: time,
      }

      console.log(data)

      // Save user in database
      await Medicine.create(data);
      return response.status(200).json()

    } catch (error) {
      return console.log(error)
    }

  }

  async show({ request, auth, response }) {
    await auth.check()
    const user = await auth.getUser()
    const medicine = await Medicine.query().where('user_id', user.id).fetch()
    return medicine
  }
}

module.exports = MedicineController
