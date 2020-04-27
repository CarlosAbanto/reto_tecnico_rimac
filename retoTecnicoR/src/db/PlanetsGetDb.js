var mysql = require('mysql2/promise');

var pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    multipleStatements: true,
    queueLimit: 0,
    connectTimeout: 10000
});

async function obtener_planetas(){
    try {
        let query = "select idPlanetas as id, nombre, periodo_rotacion , periodo_orbital, diametro, clima, terreno, aguas_superficiales, poblacion, fecha_creacion, fecha_modificacion, url from Planetas;";
        const [rows, fields] = await pool.query(query);
        //console.log("Imprimiendo fields : ",fields);
        return rows;
    } catch (error) {
        throw new Error("Error al obtener planetas de la base de datos");
    }
}

async function obtener_planeta(id_planeta){
    try {
        let query = "select idPlanetas as id, nombre, periodo_rotacion , periodo_orbital, diametro, clima, terreno, aguas_superficiales, poblacion, fecha_creacion, fecha_modificacion, url from Planetas WHERE Planetas_idPlanetas = "+id_planeta+";";
        const [rows, fields] = await pool.query(query);
        //console.log("Imprimiendo fields : ",fields);
        return rows;
    } catch (error) {
        throw new Error("Error al obtener planetas de la base de datos");
    }
}

async function obtener_residentes(id_planeta){
    try {
        let query = "select url from Residentes WHERE Planetas_idPlanetas = "+id_planeta+";";
        const [rows, fields] = await pool.query(query);
        //console.log("Imprimiendo fields : ",fields);
        return rows;
    } catch (error) {
        throw new Error("Error al obtener Residentes de la base de datos");
    }
}

async function obtener_peliculas(id_planeta){
    try {
        let query = "select url from Peliculas WHERE Planetas_idPlanetas = "+id_planeta+";";
        const [rows, fields] = await pool.query(query);
        //console.log("Imprimiendo fields : ",fields);
        return rows;
    } catch (error) {
        throw new Error("Error al obtener Peliculas de la base de datos");
    }
}

module.exports = {
    obtener_planetas : obtener_planetas,
    obtener_planeta: obtener_planeta,
    obtener_residentes: obtener_residentes,
    obtener_peliculas: obtener_peliculas
};