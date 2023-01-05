import { config } from "dotenv";
config()

export const PORT = process.env.PORT || 3000
//export default {
  //port: process.env.PORT || 3000,
  //dbUser: process.env.DB_USER || "",
  //dbPassword: process.env.DB_PASSWORD || "",
  //dbServer: process.env.DB_SERVER || "",
  //dbDatabase: process.env.DB_DATABASE || "",
  //dbDatabasePort: process.env.DB_DATABASEPORT || "",
//};
