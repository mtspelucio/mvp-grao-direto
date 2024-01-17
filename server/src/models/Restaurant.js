const { Model, DataTypes } = require('sequelize');

class Restaurant extends Model {
    static init (sequelize){
        super.init({
            name: DataTypes.STRING,
            food_type: DataTypes.STRING,
            stars: DataTypes.FLOAT,
            delivery_time: DataTypes.INTEGER,
            delivery_value: DataTypes.FLOAT,
        }, {
            sequelize
        })
    }
}

module.exports = Restaurant;