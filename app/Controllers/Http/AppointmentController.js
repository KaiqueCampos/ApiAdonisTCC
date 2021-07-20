'use strict'

class AppointmentController {
  // creating and saving a new appointment
  async store({ request, response }) {
    try {
      // getting data passed within the request
      const data = request.only(['date', 'time', 'specialization'])

      // looking for user in database
      const appointExists = await Appoint.findBy('data, data.date')

      // if appoint exists don't save
      if (appointExists) {
        return response
          .status(400)
          .send({
            message: {
              error: 'Appointment already booked'
            }
          })
      }

      // if appointent doesn't exist, proceeds with saving him in DB
      const data = await Appoint.create(data)

      return data
    } catch (err) {
      return response
        .status(err.status)
        .send(err)
    }
  }
}

module.exports = AppointmentController
