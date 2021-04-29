'use strict'
const Route = use('Route')

// Auth
Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')

// App
Route.get('/index', 'AppController.index').middleware(["auth"])

//Medicines
Route.post('/registerMedicine', 'MedicineController.register').middleware(["auth"])
Route.get('/showMedicine', 'MedicineController.show').middleware(["auth"])





