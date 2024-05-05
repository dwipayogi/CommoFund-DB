const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.json())


const userRouter = require('./routes/user.router')

app.use("/api/users", userRouter)

app.listen(process.env.PORT, () => console.log("Server is running on port 5000"))