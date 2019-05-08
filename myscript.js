var oracledb = require('oracledb');
async function run() {

  let connection;

  try {
    connection = await oracledb.getConnection(  {
      user          : "WTLC",
      password      : "WTLC",
      connectString : "192.168.0.100/CSDB"
    });
    console.log("hello");
    let result = await connection.execute(
      'SELECT ELAPSED_TIME_SEC FROM V_ATCS_JUNCTIONS WHERE JUNCNO=11');
     var r = parseInt(result.rows,10);
     console.log(result.rows);
     var res = s.toString();
     console.log(r);
     
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();