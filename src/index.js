
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
      path: "./env"
})

connectDB() //async function always return promise
.then(()=>{
      app.listen(process.env.PORT || 8000, ()=>{
            console.log(`listening on port: ${process.env.PORT}`)
      })
})
.catch((err)=>{
      console.log("mongoDB connection failed", err)
})


/*
(async ()=>{
      try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      } catch (error) {
            console.log("ERROR: ", error)
      }
})()

*/