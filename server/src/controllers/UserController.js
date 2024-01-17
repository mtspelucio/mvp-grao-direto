const { hash } = require('bcrypt');
const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
    async create(req, res) {
        const { name, email, password, address } = req.body;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(email);
        const existUser = await User.findOne({ where: { email } })
        
        if(existUser || !isValidEmail) return res.status(400).json({
            user: null, 
            message: 'Usuário já existe ou ouve problema com a digitação'
        });
        
        const passwordHash = await hash(password, 8);

        const user = await User.create({ 
            name, 
            email, 
            password: passwordHash, 
            address
        })

        return res.status(201).json(user);
    },

    async update(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        
        if (!user) return res.status(404).json({
            user: null, 
            message: 'Usuário não encontrado'
        })
    
        user.password = password;
        await user.save();
        
        res.status(200).json(user)
    },

    async findOne(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });

            const isMatchPassword = await bcrypt.compare(password, user.dataValues.password)
            
            if (!user || !isMatchPassword) return res.status(404).json({
                user: null, 
                message: 'Usuário ou senha incorreto!'
            })
            
            res.status(200).json(user)
        } catch (error) {
            return res.status(500).json({
                user: null, 
                message: 'Erro no servidor.'
            })
        }
    }
}