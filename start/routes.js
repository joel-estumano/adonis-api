'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
    Route.post('/login', 'AuthController.login').validator('Login')
    Route.get('/logout', 'AuthController.logout')
}).prefix('/auth').as('auth')

Route.group(() => {
    Route.post('/create', 'UserController.create')
}).prefix('/user').as('user')

Route.group(() => {
    Route.get('/categories', 'CategoryController.index')
    Route.post('/create', 'CategoryController.store').validator('Category')
}).prefix('/category').as('category').middleware(['auth:jwt'])

Route.group(() => {
    Route.get('/paginate', 'ArticleController.index').as('index')
    Route.post('/create', 'ArticleController.store').as('store')
}).prefix('/article').as('article').middleware(['auth:jwt'])
