const path = require("path");
const { name } = require("./package.json");

module.exports = {
  webpack: (config) => {
    config.output.library = name;
    config.output.libraryTarget = "umd";

    return config;
  },

  devServer: (configFn) => {
    return function (proxy, allowHost) {
      const config = configFn(proxy, allowHost);
      config.headers = {
        "Access-Control-Allow-Origin": "*",
      };
      config.historyApiFallback = true;

      return config;
    };
  },
};
