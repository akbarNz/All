const todoController = require("../controllers/todoController")
module.exports = (app) => {
    app.get("/", (req, res) => {
        res.send({
            status: 200,
            message: "hello"
        })
    });
    app.post("/signin", todoController.addTodo);
    app.post("/login", todoController.login);
}