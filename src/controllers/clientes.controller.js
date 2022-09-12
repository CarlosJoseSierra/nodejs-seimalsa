import { getConnection, querys, sql } from "../database";

export const getClientes = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllClientes);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const getClienteById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getClienteById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

