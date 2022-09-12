import { Date, DateTime } from "mssql";
import { getConnection, querys, sql } from "../database";

export const getHistReparados = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("id", req.params.id)
    .input("id2", req.params.id2)
    .query(querys.getDataReparados); //dataReparados
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
  };


  export const getHistDisponibles = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool
      .request()
      .input("id", req.params.id)
      .input("id2", req.params.id2)
      .query(querys.getDataDisponibles);//datadisponbles
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
    };

  export const getHistEntregados = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool
      .request()
      .input("id", req.params.id)
      .input("id2", req.params.id2)
      .query(querys.getDataEntregados);//dataentregados
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
    };

  export const getTopFiveItems = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("id2", req.params.id2)
        .query(querys.getTopFiveItems);
        res.json(result.recordset);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
  };

  export const getTotalItemsServ = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.geoTotalItemsServicios);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getHistorialEquipoEntregado = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("id2", req.params.id2)
        .query(querys.getHistorialEntregados);//gistorialentregados
        res.json(result.recordset);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
  };

  export const getHistTotalReparado = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getHistorialTotalReparacion);//
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getHistTotalDisponible = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getHistorialTotalDisponible);//
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getHistTotalEntregado = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getHistorialTotalEntregados);//
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getHistorialEquipoReparado = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("id2", req.params.id2)
        .query(querys.getHistorialReparacion);//historialReparacion
        res.json(result.recordset);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
  };

  export const getHistorialEquipoDisponible = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("id", req.params.id)
        .input("id2", req.params.id2)
        .query(querys.getHistorialDisponible);//historial dispnible
        res.json(result.recordset);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
  };

  export const getHistorialTotalEquipoReparado = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getDataReparadosTotal);//DataTotalRep
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getHistorialTotalEquipoDisponible = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getDataDisponiblesTotal);//DataTotalDisp
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

  export const getHistorialTotalEquipoEntregado = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(querys.getDataEntregadosTotal);//DataTotalEnt
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

