module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken:
          "5rYv7FQUmzwU6CWtIEmEnRw1rKLdp__8CgBuPLtaRMQ",
        spaceId: "q6ymxcnjfufs",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-HBRN8ECZ6C",
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
