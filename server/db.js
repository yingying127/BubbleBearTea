const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/bubblebeartea')

const Drink = sequelize.define('drink', {
    name: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.ENUM('Bear Milk Tea', 'Bear Fruit Tea', 'Bear Cap', 'Bear Slush')
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
       Drink.create({ name: 'Classic Milk Tea w/ Boba', category: 'Bear Milk Tea' }),
       Drink.create({ name: 'Brown Sugar w/ Boba', category: 'Bear Milk Tea' }),
       Drink.create({ name: 'Taro Milk Tea w/ Boba', category: 'Bear Milk Tea' }),
       Drink.create({ name: 'Matcha Milk Tea w/ Boba', category: 'Bear Milk Tea' }),
       Drink.create({ name: 'Thai Milk Tea w/ Boba', category: 'Bear Milk Tea' }),
       Drink.create({ name: 'Green Milk Tea w/ Boba', category: 'Bear Milk Tea' }),
       Drink.create({ name: 'Oolong Milk Tea w/ Boba', category: 'Bear Milk Tea' }),
       Drink.create({ name: 'Wintermelon Milk Tea w/ Boba', category: 'Bear Milk Tea' }),
       Drink.create({ name: 'Oreo Milk Tea w/ Boba', category: 'Bear Milk Tea' }),
       Drink.create({ name: 'Grapefruit Green Tea', category: 'Bear Fruit Tea' }),
       Drink.create({ name: 'Passionfruit Green Tea', category: 'Bear Fruit Tea' }),
       Drink.create({ name: 'Mango Green Tea', category: 'Bear Fruit Tea' }),
       Drink.create({ name: 'Lychee Oolong Tea', category: 'Bear Fruit Tea' }),
       Drink.create({ name: 'Peach Oolong Tea', category: 'Bear Fruit Tea' }),
       Drink.create({ name: 'Kumquat Lemon Tea', category: 'Bear Fruit Tea' }),
       Drink.create({ name: 'Honey Green/Oolong Tea', category: 'Bear Fruit Tea' }),
       Drink.create({ name: 'Wintermelon Green Tea', category: 'Bear Fruit Tea' }),
       Drink.create({ name: 'Jasmine Tea w/ Cheese Cap', category: 'Bear Cap' }),
       Drink.create({ name: 'Oolong Tea w/ Cheese Cap', category: 'Bear Cap' }),
       Drink.create({ name: 'Peach Oolong Tea w/ Cheese Cap', category: 'Bear Cap' }),
       Drink.create({ name: 'Mango Tea Slush w/ Cheese Cap', category: 'Bear Cap' }),
       Drink.create({ name: 'Mango Slush', category: 'Bear Slush' }),
       Drink.create({ name: 'Passionfruit Slush', category: 'Bear Slush' }),
       Drink.create({ name: 'Grapefruit Slush', category: 'Bear Slush' }),
       Drink.create({ name: 'Lychee Slush', category: 'Bear Slush' }),
       Drink.create({ name: 'Peach Slush', category: 'Bear Slush' }),
       Drink.create({ name: 'Kumquat Lemon Slush', category: 'Bear Slush' }),
       Drink.create({ name: 'Taro Slush', category: 'Bear Slush' }),

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