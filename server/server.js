import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import { userRouter } from "./routes/userRoutes.js"


dotenv.config()

const app = express()
const port = process.env.PORT || 5005

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/users', userRouter);


app.listen(port, () => console.log(`Server started on port ${port}`))