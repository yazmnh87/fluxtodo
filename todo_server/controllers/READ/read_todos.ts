const asyncHandler = require("../../middleware/async")
import pool from "../../config/db/db"

exports.readTodos = asyncHandler(async (req, res, next) => {
    const result = await pool.query('SELECT * FROM "todos"')
    console.log("fetching all todos")
    res.send(result.rows)
})
