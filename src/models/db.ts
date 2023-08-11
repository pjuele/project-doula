import postgres from 'postgres'

const connString = process.env.DB_CONNECTION_STRING || "";

const sql = postgres(
    connString,
    {
        ssl                  : 'require',         // true, prefer, require, tls.connect options
    }
);
    
export default sql