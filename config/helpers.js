const Mysqli = require('mysqli');


let conn = new Mysqli({
    host: '192.168.0.20', // IP/domain name 
    port: 3306, // port, default 3306 
    user: 'root', // username 
    password: 'root123!', // password 
    db: 'sitemanager'
});

let db = conn.emit(false, '');


module.exports = {
    database: db
};
