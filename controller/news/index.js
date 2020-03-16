// 新闻界面的控制器
const newsModel = require("../../service/news/index");

module.exports = {
  // 显示主页
  async showIndex(ctx){
    let perPage = 5;
    let p = parseInt(ctx.query.p) || 1;
    let newsData = await newsModel.getData();
    let totalPage = Math.ceil(newsData.length / perPage);
    newsData = await newsModel.getNewData(perPage,p);
    // console.log(newsData);
    await ctx.render("news/index", {
      newsData,
      totalPage,
      p
    });
  },
  // 显示详情页
  async showDetail(ctx){
    let id = parseInt(ctx.query.id) || 1;
    let detailData = await newsModel.getDetailData(id);
    detailData = detailData[0];
    // console.log(detailData);
    await ctx.render("news/detail", {
      detailData
    })
  }
}