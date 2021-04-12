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
      const { name, initialDate, finalDate} = request.all(); // info do evento

      const data = {
        user_id: user.id,
        name: name,
        initialDate: initialDate,
        finalDate: finalDate,
        // time: time.now(),
      }

      console.log(data)

      // Save user in database
      const user_data = await Medicine.create(data);
      return user_data

    } catch (error) {
      return console.log(error)
    }

  }
}

module.exports = MedicineController
