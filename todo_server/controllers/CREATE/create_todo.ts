const asyncHandler = require("../../middleware/async")
import pool from "../../config/db/db"

exports.createTodo = asyncHandler(async (req, res, next) => {
    const {title, description, priority} = req.body
    const todo = await pool.query('INSERT into "todos" ("title", "description", "priority") VALUES ($1,$2,$3)', [title, description, priority])

    if(todo.rowCount > 0){
        res.status(200).json({
            success: true
        });
    }else{
        res.status(500).json({
            success: false,
            data: "Something went wrong"
        });
    }
})
