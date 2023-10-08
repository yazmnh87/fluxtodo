const todos = require("../routes/todos/todos")

function delegateRoutes(app){
    app.use('/api', todos)
}

module.exports = delegateRoutes
