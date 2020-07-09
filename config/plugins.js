module.exports = ({ env }) => ({
  upload: {
    provider: "imagekit",
    providerOptions: {
      publicKey: env("PUBLIC_API"),
      privateKey: env("PRIVATE_API"),
      urlEndpoint: env("UPLOAD_URI"),
      params: {
        folder: "/upload",
      },
    },
  },
});
