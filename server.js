const express = require('express')
const app = express()
const users = require('./routes/users')
const auth = require('./routes/auth')
const contacts = require('./routes/contacts')
app.get('/', (req, res) =>
  res.json({ msg: 'welcome to the contact keeper API' }),
)
// Define Routes
app.use('/api/users', users)
app.use('/api/auth', auth)
app.use('/api/contacts', contacts)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on PORT: ${PORT} `))
