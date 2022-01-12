const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config()
const app = express();


//Connecting to Database
connectDB();

//To check on the port whether it is working or not
app.get('/', (req,res) => res.send("Api working!!!"))

//Init middleware
app.use(express.json());

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
