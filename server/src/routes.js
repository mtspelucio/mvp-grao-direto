const routes = require('express').Router();
const UserController = require('./controllers/UserController');
const RestaurantController = require('./controllers/RestaurantController');
const MenuController = require('./controllers/MenuController');


routes.post('/user', UserController.create)
routes.put('/user', UserController.update)
routes.post('/user/login', UserController.findOne)

routes.post('/user/restaurant', RestaurantController.create)
routes.get('/user/restaurant', RestaurantController.findAll)
routes.get('/user/restaurant/:id', RestaurantController.findOne)

routes.post('/user/restaurant/menu/:restaurant_id', MenuController.create)
routes.get('/user/restaurant/menu/:restaurant_id', MenuController.findOne)

module.exports = routes;