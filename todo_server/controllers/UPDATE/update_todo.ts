const asyncHandler = require("../../middleware/async")
import pool from "../../config/db/db"

exports.updateTodo = asyncHandler(async (req, res, next) => {
    console.log(res.send("hello world3"))
})
