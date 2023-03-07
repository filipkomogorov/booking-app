import express, {Express, Request, Response} from 'express'
import cors from 'cors'

// TODO - export this in interfaces 
interface register {
    email: string,
    password: string
}

const app = express()
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}))

app.get('/test', (req:Request, res:Response)=>{
    res.send('Hello World !')
});

app.post('/register', (req:Request, res:Response)=>{
    const {email, password}:register = req.body;
    res.json({email,password})
})

const PORT = process.env.PORT || 3000
 
app.listen(3000, ()=>{
    console.log(`server running on port ${PORT}`)
})