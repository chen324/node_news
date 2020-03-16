// 新闻页数据
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: "a123456"
});

module.exports = {
  async getData(){
    let [data] = await connection.promise().query("SELECT * FROM news");
    // console.log(data);
    return data;
  },
  async getNewData(perPage,p){
    let [data] = await connection.promise().query("SELECT * FROM news LIMIT ?,?", [(p - 1)*perPage,perPage]);
    return data;
  },
  async getDetailData(id){
    let [data] = await connection.promise().query("SELECT * FROM news WHERE id=?",[id]);
    return data;
  }
}