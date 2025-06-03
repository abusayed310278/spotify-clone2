import express from 'express'
import dotenv from "dotenv"
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
import adminRoutes from "./routes/admin.route.js"
import songRoutes from "./routes/song.route.js"
import statRoutes from "./routes/stat.route.js"
import albumRoutes from "./routes/album.route.js"
import connectToMongoDB from './lib/db.js'

dotenv.config()
const app=express()

app.use(express.json()) //to parse req.body

const PORT=process.env.PORT


app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/admin",adminRoutes)
app.use("/api/songs",songRoutes)
app.use("/api/albums",albumRoutes)
app.use("/api/stats",statRoutes)

app.listen(PORT,()=>{
    connectToMongoDB()
    console.log("server is running on port:"+PORT);
})