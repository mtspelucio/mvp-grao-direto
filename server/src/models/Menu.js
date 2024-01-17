const { Model, DataTypes } = require('sequelize');

class Menu  extends Model {
    static init (sequelize){
        super.init({
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            price: DataTypes.STRING,
            image: DataTypes.STRING,
            food_type: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Restaurant, { foreignKey: 'restaurant_id', as: 'owner' });
    }
}

module.exports = Menu;