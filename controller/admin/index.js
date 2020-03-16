// 后台管理页的控制器
const adminModel = require("../../service/admin/index");

module.exports = {
  async showIndex(ctx){
    await ctx.render("admin/index");
  },
  async addNews(ctx){
    await ctx.render("admin/addNewsPage");
  },
  async newsListPage(ctx){
    await ctx.render("admin/newsListPage");
  },
  async addNewsData(ctx){
    // console.log(ctx.request.body); // 接收 post 数据
    // console.log(ctx.request.files); // 接收文件
    let res = await adminModel.addNewsData(ctx.request);
    // console.log(res);
    let info;
    if(res.affectedRows > 0){
      info = {
        status: 1,
        message: "添加成功"
      }
    }else{
      info = {
        status: 1,
        message: "添加失败"
      }
    }
    ctx.body = info;
  }
}