const mongoose = require('mongoose');
// const ServerConfig = require('./server-config')


const connect = async() => {
    await mongoose.connect('mongodb+srv://BJain:bj123@cluster0.gwncfgf.mongodb.net/');
    
}

export default connect;
