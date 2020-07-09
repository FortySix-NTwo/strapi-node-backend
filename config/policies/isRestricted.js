module.exports = async (ctx, next) => {
  return ctx.unauthorized("Unauthorized Access");
};
