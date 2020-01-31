const express = require ('express')
const cors = require ('cors')
const app = express()
const router = require('./router')
const mongoose= require('mongoose')

const bodyParser = require('body-parser')
const helmet = require('helmet')
const corsOptions = {
    //origin: 'http://localhost:4200'
    origin: '*'
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cors(corsOptions))
app.use(helmet())
app.use('/', router)


const  server = app.listen(6200, async () => {
    console.log('listening on 6200')

    mongoose.connect(`mongodb://localhost:27017/steps-for-cause-web`, {useNewUrlParser: true })
    .then(_ => console.log(`Connected to mongo database: StepsForCauseWeb`))
    .catch(error => logger.error(error))    
})

process.on('SIGTERM', async () => { 
    server.close()
})
process.on('SIGINT', async () => { 
    server.close()
})




console.log('Starting app')