// 新闻页路由

const newsController = require("../controller/news/index");

const Router = require("koa-router");
let router = new Router({
  prefix: "/news"
});

router.get("/", ctx => {
  ctx.redirect("/news/index");
});
router.get("/index", newsController.showIndex);
router.get("/showDetail", newsController.showDetail);

module.exports = router;