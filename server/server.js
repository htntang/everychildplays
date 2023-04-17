import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRouter from "./routes/userRoutes.js"
import playgroundRouter from "./routes/playgroundRoutes.js"
import reviewRouter from "./routes/reviewRoutes.js"


dotenv.config()

const app = express()
const port = process.env.PORT || 5005

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/playgrounds', playgroundRouter);
app.use('/api/users', userRouter);
app.use('/api/reviews', reviewRouter);


app.listen(port, () => console.log(`Server started on port ${port}`))