const { getGamesEurope } = require("nintendo-switch-eshop");

module.exports = {
  friendlyName: "Get games europe",

  description: "...",

  inputs: {},

  exits: {},

  fn: async function () {
    var result = await getGamesEurope();
    console.log("action called");
    return result;
  },
};
