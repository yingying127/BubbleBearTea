const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/bubblebeartea')

const MilkTea = sequelize.define('milktea', {
    name: Sequelize.STRING
})

const FruitTea = sequelize.define('fruittea', {
    name: Sequelize.STRING
})

const CheeseCap = sequelize.define('cheesecap', {
    name: Sequelize.STRING
})

const Slush = sequelize.define('slush', {
    name: Sequelize.STRING
})

const Toppings = sequelize.define('topping', {
    name: Sequelize.STRING
})

const syncAndSeed = async() => {
    await sequelize.sync({ force: true })

    await Promise.all([
        MilkTea.create({ name: 'Classic Milk Tea w/ Boba'}),
        MilkTea.create({ name: 'Brown Sugar w/ Boba'}),
        MilkTea.create({ name: 'Taro Milk Tea w/ Boba'}),
        MilkTea.create({ name: 'Matcha Milk Tea w/ Boba'}),
        MilkTea.create({ name: 'Thai Milk Tea w/ Boba'}),
        MilkTea.create({ name: 'Green Milk Tea w/ Boba'}),
        MilkTea.create({ name: 'Oolong Milk Tea w/ Boba'}),
        MilkTea.create({ name: 'Wintermelon Milk Tea w/ Boba'}),
        MilkTea.create({ name: 'Oreo Milk Tea w/ Boba'}),

        FruitTea.create({ name: 'Grapefruit Green Tea'}),
        FruitTea.create({ name: 'Passionfruit Green Tea'}),
        FruitTea.create({ name: 'Mango Green Tea'}),
        FruitTea.create({ name: 'Lychee Oolong Tea'}),
        FruitTea.create({ name: 'Peach Oolong Tea'}),
        FruitTea.create({ name: 'Kumquat Lemon Tea'}),
        FruitTea.create({ name: 'Honey Green/Oolong Tea'}),
        FruitTea.create({ name: 'Wintermelon Green Tea'}),

        CheeseCap.create({ name: 'Jasmine Tea w/ Cheese Cap'}),
        CheeseCap.create({ name: 'Oolong Tea w/ Cheese Cap'}),
        CheeseCap.create({ name: 'Peach Oolong Tea w/ Cheese Cap'}),
        CheeseCap.create({ name: 'Mango Tea Slush w/ Cheese Cap'}),

        Slush.create({ name: 'Mango Slush'}),
        Slush.create({ name: 'Passionfruit Slush'}),
        Slush.create({ name: 'Grapefruit Slush'}),
        Slush.create({ name: 'Lychee Slush'}),
        Slush.create({ name: 'Peach Slush'}),
        Slush.create({ name: 'Kumquat Lemon Slush'}),
        Slush.create({ name: 'Taro Slush'}),

        Toppings.create({ name: 'Boba'}),
        Toppings.create({ name: 'Brown Sugar Boba'}),
        Toppings.create({ name: 'Crystal Boba'}),
        Toppings.create({ name: 'Lychee Jelly'}),
        Toppings.create({ name: 'Rainbow Jelly'}),
        Toppings.create({ name: 'Cheese Foam'}),
        Toppings.create({ name: 'Mango Popping Boba'}),
        Toppings.create({ name: 'Strawberry Popping Boba'}),
        Toppings.create({ name: 'Lychee Popping Boba'}),
        Toppings.create({ name: 'Passionfruit Popping Boba'})
    ])
}

module.exports = {
    syncAndSeed,
    models: {
        MilkTea,
        FruitTea,
        CheeseCap,
        Slush,
        Toppings
    }
}