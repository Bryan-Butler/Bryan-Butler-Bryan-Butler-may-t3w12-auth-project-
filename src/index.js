require('dotenv').config();

const { databaseConnect } = require ('./database');
const { app } = require ('./server');

const PORT = porcess.env.PORT;

app.listen(PORT, async()=> {
    await databaseConnect();
    console.log("Server running")
})