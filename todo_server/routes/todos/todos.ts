const express = require('express')
const router = express.Router()
const { createTodo } = require('../../controllers/CREATE/create_todo')
const { deleteTodo } = require('../../controllers/DELETE/delete_todo')
const { updateTodo } = require('../../controllers/UPDATE/update_todo.ts')
const { readTodos } = require('../../controllers/READ/read_todos')

router.get("/todos", readTodos)

router.post("/todos", createTodo)

router.delete("/todos", deleteTodo)

router.put("/todos", updateTodo)

module.exports = router
