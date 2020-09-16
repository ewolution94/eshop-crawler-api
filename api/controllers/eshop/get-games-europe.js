const { getGamesEurope } = require("nintendo-switch-eshop");

module.exports = {
  friendlyName: "Get games europe",

  description: "...",

  inputs: {},

  exits: {},

  fn: async function () {
    var requestedLimit = this.req.query != {} ? this.req.query.limit : null;
    console.log(
      "GET getGamesEurope",
      requestedLimit != null ? "| limit: " + requestedLimit : ""
    );
    return await getGamesEurope({ limit: requestedLimit });
  },
};
