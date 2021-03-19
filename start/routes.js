'use strict'
const Route = use('Route')

// Auth
Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')

// App
Route.get('/index', 'AppController.index').middleware(["auth"])



