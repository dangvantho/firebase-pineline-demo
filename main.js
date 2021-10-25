// ESM syntax is supported.
import dotenv from "dotenv";
dotenv.config();
import express from 'express'
import nnnRouter from 'nnn-router'

const app = express()
const router = express.Router()
const port = process.env.PORT || 3000
const nnnConfig = {
  routeDir: '/routes',
  baseRouter: router
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(nnnRouter(nnnConfig))

app.listen(port, ()=> console.log('App is running on port', port))

export {app};
