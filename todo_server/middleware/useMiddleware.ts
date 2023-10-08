import express from "express";

module.exports = app => {
    app.use(express.json())
    return app
}
