require('dotenv').config();

const config = { 
    port:process.env.PORT,
}

const options = {
    client:'sqlite3',
    connection:{
        filename:'./DB/mydb.sqilte'
    },
    useNullAsDefault:true,
    pool: { min: 2, max: 7 }
}

module.exports = {config, options}