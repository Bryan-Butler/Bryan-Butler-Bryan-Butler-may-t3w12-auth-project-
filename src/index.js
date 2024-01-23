const {databaseConnect} = require('./database');
const {app} = require('./server')


app.listen(3000, async () =>{
    databaseConnect();
    console.log('server is running')
})