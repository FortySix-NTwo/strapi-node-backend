module.exports = ({ env }) => {
  switch (env("NODE_ENV")) {
    case "development":
      return {
        defaultConnection: "default",
        connections: {
          default: {
            connector: "bookshelf",
            settings: {
              client: "sqlite",
              filename: env("DATABASE_FILENAME", ".tmp/data.db"),
            },
            options: {
              useNullAsDefault: true,
            },
          },
        },
      };
    case "production":
      return {
        defaultConnection: "default",
        connections: {
          default: {
            connector: "bookshelf",
            settings: {
              client: "postgres",
              host: env("DATABASE_HOST"),
              port: env.int("DATABASE_PORT"),
              database: env("DATABASE_NAME"),
              username: env("DATABASE_USERNAME"),
              password: env("DATABASE_PASSWORD"),
            },
            options: {
              ssl: false,
            },
          },
        },
      };
  }
};
