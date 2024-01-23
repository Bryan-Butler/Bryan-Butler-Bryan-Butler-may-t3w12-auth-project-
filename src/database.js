const mongoose = require('mongoose');

async function databaseConnect(){
    try{
        console.log('attempting to connect to: ' + process.env.DB_URI)
        await mongoose.connect(process.env.DB_URI);
        console.log('database connected');
    }catch(error){
        console.warn(`databaseConnect failed to connect to database ${JSON.stringify(error)}`);

    }
}