const env = require("./env-config")

module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["transform-define", env],
    [
      "wrap-in-js",
      {
        extensions: ["css$"],
      },
    ],
    "inline-react-svg",
  ],
}
