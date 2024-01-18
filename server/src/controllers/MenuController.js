const Menu = require('../models/Menu');

module.exports = {
    async create(req, res) {
        const { restaurant_id } = req.params;
        const { title, description, price, image, food_type } = req.body;
        
        const menu = await Menu.create({ 
            title, 
            description, 
            price, 
            image,
            food_type,
            restaurant_id
        })

        return res.status(201).json(menu);
    },

    async findOne(req, res) {
        const { restaurant_id } = req.params;
        const menu = await Menu.findAll({ where: { restaurant_id } });        
        if (!menu) {
            return res.status(400).json({
                user: null, 
                message: 'O restaurante não possui um cardápio'
            });
        }
        
        res.status(200).json(menu)
    },
}