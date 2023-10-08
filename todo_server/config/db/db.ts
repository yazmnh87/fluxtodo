const {Pool} = require('pg')
const DBUSER = "postgres"
const DBPASS = "Golfaz12"
const DBHOST = "localhost"
const DBPORT = "5432"
const DBNAME = "tododb"
const connectionString = `postgresql://${DBUSER}:${DBPASS}@${DBHOST}:${DBPORT}/${DBNAME}`

 const pool = new Pool({
    connectionString: connectionString,
    ssl: false
})


export default pool
