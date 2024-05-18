const postgre = require('../database')
const userController = {
    getAll: async(req, res) => {
        try {
            const { rows } = await postgre.query("select * from users")
            res.json({msg: "OK", data: rows})
            res.header("content-type", "application/json")
            res.header("Access-Control-Allow-Origin", "*")
            res.status(200)
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
}

module.exports = userController