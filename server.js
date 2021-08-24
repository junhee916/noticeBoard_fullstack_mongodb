require('dotenv').config()
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const morgan = require('morgan')

// connceted mongodb
const connectDB = require('./config/database')
connectDB()

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use(morgan('dev'))

// connected script
app.use('/script', express.static(__dirname + '/script'))

// connected multer 
app.use('/uploads', express.static('/uploads'))

// setting ejs 
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.get('/', (req, res) => {

    res.render('login.html')
})

app.get('/noticeBoard', (req, res) => {

    res.render('noticeBoard.html')
})

app.get('/signup', (req, res) => {

    res.render('signup.html')
})

const userRouter = require('./router/user')
const boardRouter = require('./router/board')

app.use('/user', userRouter)
app.use('/board', boardRouter)

const PORT = process.env.PORT || 7000

app.listen(PORT, console.log("connected server..."))