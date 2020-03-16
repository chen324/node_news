// 后台管理 添加数据
const mysql = require("mysql2");
const fs = require("fs");
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: "a123456"
});

module.exports = {
  async addNewsData(request){
    // 判断有没有这个文件
    if(!fs.existsSync("static/uploads/")){
      // console.log("没有此文件");
      fs.mkdirSync("static/uploads/");
    }
    fs.writeFileSync("static/uploads/" + request.files.img.name,fs.readFileSync(request.files.img.path));
    let { title, content, type } = request.body;
    let imgUrl = "/uploads/" + request.files.img.name;
    let [res] = await connection.promise().query("INSERT INTO news (title, content, type, imgUrl) VALUES (?,?,?,?)",[title, content, type, imgUrl]);
    return res;
  }
}