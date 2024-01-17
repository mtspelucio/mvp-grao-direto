const Menu = require('../models/Menu');

module.exports = {
    async create(req, res) {
        const { restaurant_id } = req.params;
        const { name, description, price, image } = req.body;
        
        const menu = await Menu.create({ 
            name, 
            description, 
            price, 
            image,
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