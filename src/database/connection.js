import sql from "mssql";
import config from "../config";

export const dbSettings = {
 /*  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase, */
  user: 'sa',
  password: 'Solomon2011',
  server: '181.198.20.179',
  database: 'PRODUCCION',
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export const getConnection = async () => {
  const pore = process.env.PORT;
  try {
    console.log("puerto 1:"+pore);
    console.log(dbSettings);
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.log("puerto error:"+pore);
    console.log(dbSettings);
    console.error(error);
  }
};

export { sql };
