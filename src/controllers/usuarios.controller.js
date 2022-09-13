import { getConnection, querys, sql } from "../database";
const jwt = require('jsonwebtoken');

export const getUsuarios = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllUsuarios);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getUser = async(req, res) =>{
  const { USU_usuario, USU_clave } = req.body;
  
  //return res.status(200).json({ status: "200",msg: "Hola" + req.params.USU_usuario});
  console.log(req.body);

   if (USU_usuario == null || USU_clave == null) {
      return res.status(400).json({ status: "400",msg: "Favor ingresar Datos Requeridos" });
    }
    else
    {

      return res.status(200).json({ status: "200",msg: "Bienvenido" });
    }
}

export const getByUserPass = async (req, res) => {
    const { USU_usuario, USU_clave } = req.body;

    // validating
    if (USU_usuario == null || USU_clave == null) {
      return res.status(400).json({ status: "400",msg: "Favor ingresar Datos Requeridos" });
    }
  
    try {
      const pool = await getConnection();
      const result = await pool
        .request()
        .input("USU_usuario", sql.VarChar, USU_usuario)
        //.input("USU_clave", sql.VarChar, USU_clave)
        .query(querys.getUserPass);
      //Lo nuevo implementado por cs
      if(result.recordset[0]){
          if(result.recordset[0]['USU_clave'] == USU_clave){
            const userFormToken={
              id:result.recordset[0]['USU_id'],
              nameU: result.recordset[0]['USU_usuario']}
              //const token = jwt.sign(userFormToken,process.env.SECRET_WORD)
              const token = '00ggg';
            return res.json({status: "ok", msg: result.recordset[0],token:token});
          }
          else{
            return res.status(400).json({ status: "400", msg: "El password es incorrecto" ,token:0});
          }
      }
      else{
        return res.status(400).json({ status: "400", msg: "El user es incorrecto",token:0 });
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
      return res.status(500).json({ status: "500", msg: res.send(error.message),token:0  });
    }
};

export const getUsuarioById = async (req, res) => {
    try {
        const pool = await getConnection();
    
        const result = await pool
          .request()
          .input("id", req.params.id)
          .query(querys.getUsuarioById);
        return res.json(result.recordset[0]);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
  };


