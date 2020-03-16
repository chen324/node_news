// 路由主入口
const newsRouter = require("./routers/newsRouter");
const adminRouter = require("./routers/adminRouter");
const Router = require("koa-router");
let router = new Router();
router.get("/", ctx => {
  ctx.body = "hello";
});

module.exports = function(app){
  app.use(router.routes());
  app.use(newsRouter.routes());
  app.use(adminRouter.routes());
}