var pool = require('./bd');

async function getNovedades(){
    var query = "select * from bdnovedades order by id";
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedades(obj){
    try{
        var query= "insert into bdnovedades set ? ";
        var rows = await pool.query(query,[obj]);
        return rows;
    }catch(error){
        console.log(error);
        throw error;
    }

}


module.exports = {getNovedades, insertNovedades}