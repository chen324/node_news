// 后台管理页路由

const adminController = require("../controller/admin/index");

const Router = require("koa-router");
let router = new Router({
  prefix: "/admin"
});

router.get("/", ctx => {
  ctx.redirect("/admin/index");
});
router.get("/index", adminController.showIndex);
router.get("/addNews", adminController.addNews);
router.get("/showNewsList", adminController.newsListPage);
router.post("/addNewsData",adminController.addNewsData);

module.exports = router;