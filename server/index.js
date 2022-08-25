const { syncAndSeed, models: { MilkTea, FruitTea, CheeseCap, Slush, Toppings }} = require('./db')
const app = require('./app')

const init = async() => {
    await syncAndSeed()

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`making boba on port ${port}`))
}

init()