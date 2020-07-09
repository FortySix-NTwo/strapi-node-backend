module.exports = async (ctx, next) => {
  if (ctx.state.user) {
    if (!ctx.params.id) {
      return ctx.unauthorized("Unauthorized Access");
    }
    const owner = ctx.params.id.toString();
    const requestingUser = ctx.state.user.id.toString();
    if (owner === requestingUser) {
      return await next();
    } else {
      return ctx.unauthorized("Unauthorized Access");
    }
  }
  return ctx.unauthorized("You Must Be Logged In");
};
