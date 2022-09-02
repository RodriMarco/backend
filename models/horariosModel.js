var pool = require('./bd');

async function getHorarios() {
    var query = "select * from bdhorarios order by id";
    var rows = await pool.query(query);
    return rows;
}

async function insertHorarios(obj){
    try{
        var query = "insert into bdhorarios set ?";
        var rows = await pool.query(query,[obj]);
        return rows;
    }catch(error) {
        console.log(error);
        throw error;
    }
}

async function deleteHorariosById(id){
    var query = "delete from bdhorarios where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getHorariosById(id) {
    var query = "select * from bdhorarios where id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}


async function modificarHorariosById(obj,id) {
    try {
        var query = "update bdhorarios set ? where id = ?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    getHorarios,
    insertHorarios,
    deleteHorariosById,
    getHorariosById,
    modificarHorariosById
}
