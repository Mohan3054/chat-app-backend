const mongoose = require('mongoose');
mongoose.set('strictQuery',false)

const db = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to the database...')
    }catch(error){
        console.log('Error: ', error);
    }
}

module.exports = db;