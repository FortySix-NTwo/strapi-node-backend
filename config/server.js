module.exports = ({ env }) => ({
  host: env("HOST"),
  port: env.int("PORT"),
  cron: {
    enabled: true,
  },
});
