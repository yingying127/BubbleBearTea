const { syncAndSeed } = require('./db')
const app = require('./app')

const init = async() => {
    try {
        await syncAndSeed()

        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`making boba on port ${port}`))
    }
    catch(ex) {
        console.log(ex)
    }
}

init()