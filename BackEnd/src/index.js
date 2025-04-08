const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const connectDatabase = require('./config/mongo.config')

dotenv.config();
const PORT = process.env.PORT || 3001

connectDatabase();

app.use(express.json())
app.use(cors())


app.use( '/api/employee', require('./routes/employee.route'))
app.use( '/api/department', require('./routes/department.route'))

app.listen(PORT, () => {
    try {
        console.log(`Server connected on port ${ PORT }`)
    } catch(error){
        console.log(`Error in server, Error: `, error)
    }
})

module.exports = app