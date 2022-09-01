const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/bubblebeartea')

const Drink = sequelize.define('drink', {
    name: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.ENUM('milktea', 'fruittea', 'cheesecap', 'slush')
    }
})

const Topping = sequelize.define('topping', {
    name: {
        type: Sequelize.STRING
    }
})

const Person = sequelize.define('person', {
    name: {
        type: Sequelize.STRING
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

const syncAndSeed = async() => {
    await sequelize.sync({ force: true })

    await Promise.all([
       Drink.create({ name: 'Classic Milk Tea w/ Boba', category: 'milktea' }),
       Drink.create({ name: 'Brown Sugar w/ Boba', category: 'milktea' }),
       Drink.create({ name: 'Taro Milk Tea w/ Boba', category: 'milktea' }),
       Drink.create({ name: 'Matcha Milk Tea w/ Boba', category: 'milktea' }),
       Drink.create({ name: 'Thai Milk Tea w/ Boba', category: 'milktea' }),
       Drink.create({ name: 'Green Milk Tea w/ Boba', category: 'milktea' }),
       Drink.create({ name: 'Oolong Milk Tea w/ Boba', category: 'milktea' }),
       Drink.create({ name: 'Wintermelon Milk Tea w/ Boba', category: 'milktea' }),
       Drink.create({ name: 'Oreo Milk Tea w/ Boba', category: 'milktea' }),
       Drink.create({ name: 'Grapefruit Green Tea', category: 'fruittea' }),
       Drink.create({ name: 'Passionfruit Green Tea', category: 'fruittea' }),
       Drink.create({ name: 'Mango Green Tea', category: 'fruittea' }),
       Drink.create({ name: 'Lychee Oolong Tea', category: 'fruittea' }),
       Drink.create({ name: 'Peach Oolong Tea', category: 'fruittea' }),
       Drink.create({ name: 'Kumquat Lemon Tea', category: 'fruittea' }),
       Drink.create({ name: 'Honey Green/Oolong Tea', category: 'fruittea' }),
       Drink.create({ name: 'Wintermelon Green Tea', category: 'fruittea' }),
       Drink.create({ name: 'Jasmine Tea w/ Cheese Cap', category: 'cheesecap' }),
       Drink.create({ name: 'Oolong Tea w/ Cheese Cap', category: 'cheesecap' }),
       Drink.create({ name: 'Peach Oolong Tea w/ Cheese Cap', category: 'cheesecap' }),
       Drink.create({ name: 'Mango Tea Slush w/ Cheese Cap', category: 'cheesecap' }),
       Drink.create({ name: 'Mango Slush', category: 'slush' }),
       Drink.create({ name: 'Passionfruit Slush', category: 'slush' }),
       Drink.create({ name: 'Grapefruit Slush', category: 'slush' }),
       Drink.create({ name: 'Lychee Slush', category: 'slush' }),
       Drink.create({ name: 'Peach Slush', category: 'slush' }),
       Drink.create({ name: 'Kumquat Lemon Slush', category: 'slush' }),
       Drink.create({ name: 'Taro Slush', category: 'slush' }),

       Topping.create({ name: 'Boba'}),
       Topping.create({ name: 'Brown Sugar Boba'}),
       Topping.create({ name: 'Crystal Boba'}),
       Topping.create({ name: 'Lychee Jelly'}),
       Topping.create({ name: 'Rainbow Jelly'}),
       Topping.create({ name: 'Cheese Foam'}),
       Topping.create({ name: 'Mango Popping Boba'}),
       Topping.create({ name: 'Strawberry Popping Boba'}),
       Topping.create({ name: 'Lychee Popping Boba'}),
       Topping.create({ name: 'Passionfruit Popping Boba'}),

       Person.create({ name: 'James', isAdmin: true}),
       Person.create({ name: 'Alec', isAdmin: true}),
       Person.create({ name: 'Ying', isAdmin: true}),
       Person.create({ name: 'Customer 1', isAdmin: false}),
       Person.create({ name: 'Customer 2', isAdmin: false}),
       Person.create({ name: 'Customer 3', isAdmin: false})
    ])
}

module.exports = {
    syncAndSeed,
    models: {
        Drink,
        Topping,
        Person
    }
}