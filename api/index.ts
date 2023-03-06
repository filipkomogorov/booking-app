import express, {Express, Request, Response} from 'express'

const app = express()

app.get('/', (req:Request, res:Response)=>{
    res.send('Hello World !')
})

const PORT = process.env.PORT || 3000

app.listen(3000, ()=>{
    console.log(`server running on port ${PORT}`)
})