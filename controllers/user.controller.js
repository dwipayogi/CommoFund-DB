const postgre = require('../database')
const bookController = {
    getAll: async(req, res) => {
        try {
            const { rows } = await postgre.query("select * from users")
            res.json({msg: "OK", data: rows})
            console.log(rows)
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
}

module.exports = bookController