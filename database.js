console.log('asdadasd');
import MySqlConnection from 'react-native-my-sql-connection'
//const allusers = await pool.query('call GetAllUsu');
console.log('xd');
let config = {
    host:'us-cdbr-east-02.cleardb.com',
    database:'heroku_6fb09b5011f095a',
    user:'b6bcd30868f925',
    password:'5336b416'
    };
    console.log("ant"); 
    try{
        async function ese(){
            const connection = await MySqlConnection.createConnection(config);
            let res = await connection.executeQuery('call GetAllUsu')
            console.log(res)
            connection.close();  
        }
        
    }catch(err){
        // handle error
    }

const mysql = require('mysql')
const {promisify} = require('util');
const data = {
    host: 'us-cdbr-east-02.cleardb.com',
    database:'heroku_6fb09b5011f095a',
    user:'b6bcd30868f925',
    password:'5336b416'
}
const database = data;
const pool = mysql.createPool(database);
pool.getConnection((err,connection) =>{
    console.log('buenas41');
    if(err){
        if(err.code === 'PROTOCOL_CONECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        console.log('buenas42');
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANT CONNECTIONS');
        }
        console.log('buenas43');
        if(err.code === 'ECONNREFUSED'){
            console.error('DATABSAE CONNECTION WAS REFUSED'); 
        }
    }
    

    if(connection)connection.release();
    console.log('conexion con bd buena');
    return;
});
console.log('buenas5');
pool.query = promisify(pool.query);
console.log('buenas6');
module.exports = pool;