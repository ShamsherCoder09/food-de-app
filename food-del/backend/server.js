import express  from "express"
import cors from 'cors'
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import foodRouter from "./routes/foodRoute.js"
import { config } from "dotenv"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

config();
// app config
const app = express()
const port = process.env.PORT;


// middlewares
app.use(express.json())
app.use(cors())

// db connection
connectDB()

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))