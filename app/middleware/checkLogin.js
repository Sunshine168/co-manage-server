'use strict';

// 检查登录状态,没有登录则返回401
async function checkLogin(ctx, next) {
  await next();
  if (!ctx.session.user) {
    ctx.body = {
      resCode: 401,
      message: '请先登录',
    };
  }
}

module.exports = checkLogin;