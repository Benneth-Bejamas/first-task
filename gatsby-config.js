const path = require("path");

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: { "@": path.join(__dirname, "src") },
    },
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: "aTUpUwzzQqbtUJ0pRpBB2Att",
        version: "draft",
        localAssets: true, // Optional parameter to download the images to use with Gatsby Image Plugin
        //languages: ["de", "at"], // Optional parameter. Omission will retrieve all languages by default.
      },
    },
  ],
};
