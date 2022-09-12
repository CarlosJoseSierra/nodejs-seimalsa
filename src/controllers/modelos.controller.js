import { getConnection, querys, sql } from "../database";

export const getModeloByIdCliente = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("id", req.params.id)
    .input("id2", req.params.id2)
    .query(querys.getTopSevenModelos);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalModelo = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getTotalModelos);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

