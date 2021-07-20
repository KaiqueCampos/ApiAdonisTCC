'use strict'
const Route = use('Route')

// Auth
Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')
Route.post('/update', 'AuthController.update').middleware(["auth"])
Route.get('/showUser', 'AuthController.show').middleware(["auth"])

//Medicines
Route.post('/status', 'MedicineController.addStatus').middleware(["auth"])
Route.post('/registerMedicine', 'MedicineController.register').middleware(["auth"])
Route.post('/deleteMedicine', 'MedicineController.delete')
Route.get('/showMedicine', 'MedicineController.show').middleware(["auth"])


//Hospítal
Route.post('/createHospital', 'HospitalController.store')
Route.get('/showHospital', 'HospitalController.show')
