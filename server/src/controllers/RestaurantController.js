const Restaurant = require('../models/Restaurant');

module.exports = {
    async create(req, res) {
        const { 
            name, 
            food_type, 
            phone, 
            address, 
            stars, 
            delivery_time, 
            delivery_price,
            image
        } = req.body;
        
        if (Restaurant.findOne({ where: { name } })) return res.status(400).json({user: null, message: 'Restaurante já existe'});
        const restaurant = await Restaurant.create({ 
            name, 
            food_type, 
            phone,
            address,
            stars, 
            delivery_time, 
            delivery_price,
            image
        })

        return res.status(201).json(restaurant);
    },

    async findAll(req, res) {
        const restaurant = await Restaurant.findAll();        
        res.status(200).json(restaurant)
    },

    async findOne(req, res) {
        const { id } = req.params
        const restaurant = await Restaurant.findOne({ where: { id } });        
        res.status(200).json(restaurant)
    }
}