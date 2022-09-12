import { getConnection, querys, sql } from "../database";

export const getActivos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllActivos);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
    res.send('no se conecto');
  }
};

export const createNewActivo = async (req, res) => {
  const { EQC_serie, EQC_placa, EQC_EQUIP_id,EQC_CLI_id,EQC_USU_ing,EQC_codTag } = req.body;
  
  // validating
  if (EQC_serie == null || EQC_placa == null ||  EQC_EQUIP_id==null || EQC_CLI_id == null || EQC_USU_ing == null || EQC_codTag == null) {
    return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
  }

  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("EQC_serie", sql.VarChar, EQC_serie)
      .input("EQC_placa", sql.VarChar, EQC_placa)
      .input("EQC_EQUIP_id", sql.Decimal, EQC_EQUIP_id)
      .input("EQC_CLI_id", sql.Decimal, EQC_CLI_id)
      .input("EQC_USU_ing", sql.Decimal, EQC_USU_ing)
      .input("EQC_codTag", sql.VarChar, EQC_codTag)
      .query(querys.addNewActivo);
      if(result.rowsAffected==1){
        return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0});
      }else{
        return res.status(400).json({ status: "400", msg: "No se pudo registrar, consulte al administrador" ,token:0});
      }
    
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getActivoById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getActivoById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getActivoByCodTag = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("EQC_codTag", req.params.EQC_codTag)
      .query(querys.getActivoByTag);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteActivoById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteActivo);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalActivos = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalActivos);
  console.log(result);
  res.json(result.recordset[0][""]);
};

export const updateActivoById = async (req, res) => {
  const { EQC_serie, EQC_placa, EQC_EQUIP_id,EQC_CLI_id,EQC_USU_ing,EQC_fecha_ing,EQC_codTag } = req.body;

  // validating
  if (description == null || name == null || quantity == null) {
    return res.status(400).json({ msg: "Favor ingresar Datos Requeridos" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("id", req.params.id)
      .input("EQC_serie", sql.VarChar, EQC_serie)
      .input("EQC_placa", sql.VarChar, EQC_placa)
      .input("EQC_EQUIP_id", sql.Decimal, EQC_EQUIP_id)
      .input("EQC_CLI_id", sql.Decimal, EQC_CLI_id)
      .input("EQC_USU_ing", sql.Decimal, EQC_USU_ing)
      .input("EQC_fecha_ing", sql.DateTime, EQC_fecha_ing)
      .input("EQC_codTag", sql.VarChar, EQC_codTag)
      .query(querys.updateActivoById);

    res.json({ EQC_serie, EQC_placa, EQC_EQUIP_id,EQC_CLI_id, EQC_USU_ing,EQC_fecha_ing,EQC_codTag});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getActivosXCliente = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input("idCliente", req.params.idCliente)
    .input("idCliente2", req.params.idCliente2)
    .query(querys.getActivoByCliente);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
