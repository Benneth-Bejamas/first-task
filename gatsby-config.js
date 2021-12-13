const path = require("path");

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-root-import",
      options: { "@": path.join(__dirname, "src") },
    },
  ],
};
