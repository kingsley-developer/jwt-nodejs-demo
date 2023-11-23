import { config } from "dotenv";
import express, { Express, Response, Request } from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import { verify } from "jsonwebtoken";
import { hash, compare } from "bcrypt";
import moment from "moment";

config()
const app : Express = express()
const PORT: number = Number(process.env.PORT)
const date: string = moment().calendar()

app.use(cors({
    credentials:true
}))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.json())

export default function Server(){
    app.post("/register", async(Req: Request, Res:Response)=>{
        let {email, password} = Req.body
       try{
        const hashpassword = await hash(password, 10)
        console.log(hashpassword)
        Res.status(404).json({date, hashpassword})
    }
    catch(e:any){
        Res.status(404).json({date, msg:"Failed to create user"})
    }
    })

    app.use("*", (Req: Request, Res: Response)=>{
        Res.status(404).json({date, msg:"Page not found"})
    })
    app.listen(PORT, ()=>{
        console.log(`Server listening on port ${PORT}`)
    })
}