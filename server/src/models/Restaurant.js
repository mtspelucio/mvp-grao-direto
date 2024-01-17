const { Model, DataTypes } = require('sequelize');

class Restaurant extends Model {
    static init (sequelize){
        super.init({
            name: DataTypes.STRING,
            food_type: DataTypes.STRING,
            phone: DataTypes.STRING,
            address: DataTypes.STRING,
            stars: DataTypes.STRING,
            delivery_time: DataTypes.INTEGER,
            delivery_price: DataTypes.STRING,
            image: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Restaurant;