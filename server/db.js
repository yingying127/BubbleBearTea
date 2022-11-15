const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/bubblebeartea')

const Drink = sequelize.define('drink', {
    name: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.ENUM('Bear Milk Tea', 'Bear Fruit Tea', 'Bear Matcha', 'Bear Specialty', 'Bear Slush')
    }
})

const Topping = sequelize.define('topping', {
    name: {
        type: Sequelize.STRING
    }
})

const syncAndSeed = async() => {
    await sequelize.sync({ force: true })
 
    await Promise.all([
       Drink.create({ name: 'Classic Milk Tea w/ Boba', category: 'Bear Milk Tea' }),
       Drink.create({ name: 'Brown Sugar w/ Boba', category: 'Bear Milk Tea' }),
       Drink.create({ name: 'Taro Milk Tea w/ Boba', category: 'Bear Milk Tea' }),
       Drink.create({ name: 'Thai Milk Tea w/ Boba', category: 'Bear Milk Tea' }),
       Drink.create({ name: 'Coconut Milk Tea w/ Boba', category: 'Bear Milk Tea' }),
       Drink.create({ name: 'Jasmine Milk Tea w/ Boba', category: 'Bear Milk Tea' }),
       Drink.create({ name: 'Oolong Milk Tea w/ Boba', category: 'Bear Milk Tea' }),
       Drink.create({ name: 'Winter Melon Milk Tea w/ Boba', category: 'Bear Milk Tea' }),
       Drink.create({ name: 'Oreo Milk Tea w/ Boba', category: 'Bear Milk Tea' }),
       Drink.create({ name: 'Grapefruit Green Tea', category: 'Bear Fruit Tea' }),
       Drink.create({ name: 'Passionfruit Green Tea', category: 'Bear Fruit Tea' }),
       Drink.create({ name: 'Mango Green Tea', category: 'Bear Fruit Tea' }),
       Drink.create({ name: 'Lychee Oolong Tea', category: 'Bear Fruit Tea' }),
       Drink.create({ name: 'Peach Oolong Tea', category: 'Bear Fruit Tea' }),
       Drink.create({ name: 'Kumquat Lychee Green Tea', category: 'Bear Fruit Tea' }),
       Drink.create({ name: 'Honey Green/Oolong Tea', category: 'Bear Fruit Tea' }),
       Drink.create({ name: 'Strawberry Green Tea', category: 'Bear Fruit Tea' }),
       Drink.create({ name: 'Strawberry Matcha Latte w /Boba', category: 'Bear Matcha' }),
       Drink.create({ name: 'Yuzu Matcha Latte w/ Boba', category: 'Bear Matcha' }),
       Drink.create({ name: 'Strawberry Milk w/ Boba', category: 'Bear Specialty' }),
       Drink.create({ name: 'Mango Milk w/ Boba', category: 'Bear Specialty' }),
       Drink.create({ name: 'Tropical Blend w/ Boba', category: 'Bear Specialty' }),
       Drink.create({ name: 'Sunset Blast w/ Boba', category: 'Bear Specialty' }),
       Drink.create({ name: 'Mango Slush', category: 'Bear Slush' }),
       Drink.create({ name: 'Passionfruit Slush', category: 'Bear Slush' }),
       Drink.create({ name: 'Lychee Slush', category: 'Bear Slush' }),
       Drink.create({ name: 'Peach Slush', category: 'Bear Slush' }),
       Drink.create({ name: 'Strawberry Slush', category: 'Bear Slush' }),
       Drink.create({ name: 'Taro Slush', category: 'Bear Slush' }),

       Topping.create({ name: 'Boba'}),
       Topping.create({ name: 'Brown Sugar Boba'}),
       Topping.create({ name: 'Crystal Boba'}),
       Topping.create({ name: 'Lychee Jelly'}),
       Topping.create({ name: 'Rainbow Jelly'}),
       Topping.create({ name: 'Sea Salt Cream'}),
       Topping.create({ name: 'Mango Popping Boba'}),
       Topping.create({ name: 'Strawberry Popping Boba'}),
       Topping.create({ name: 'Lychee Popping Boba'}),
       Topping.create({ name: 'Passionfruit Popping Boba'})
    ])
}

module.exports = {
    syncAndSeed,
    models: {
        Drink,
        Topping,
    }
}