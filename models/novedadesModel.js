var pool = require('./bd');

async function getNovedades() {
    var query = "select * from bdnovedades order by id";
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedades(obj) {
    try {
        var query = "insert into bdnovedades set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteNovedades(id) {
    var query = "delete from bdnovedades where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNovedadesById(id) {
    var query = "select * from bdnovedades where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarNovedadesById(obj,id) {
    try {
        var query = "update bdnovedades set ? where id = ?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getNovedades,
    insertNovedades,
    deleteNovedades,
    getNovedadesById,
    modificarNovedadesById
}