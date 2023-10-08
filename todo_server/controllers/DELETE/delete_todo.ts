const asyncHandler = require("../../middleware/async")
import pool from "../../config/db/db"

exports.deleteTodo = asyncHandler(async (req, res, next) => {
    console.log(`id?? ${req.query}`)
    const {id} = req.query
    console.log(`id?? ${id}`)
    const query = {
        name: 'delete-todo',
        text: 'DELETE FROM todos WHERE id = $1',
        values: [id]
    }
    try{
        const result = await pool.query(query)
        console.log(result)
    }catch (e) {
        console.log(e)
    }

    res.send({success: true})
})
