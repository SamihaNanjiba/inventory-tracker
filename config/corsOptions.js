const allowedOrigins = require("./allowedOrigins")

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      console.log("origin: ", origin);
      callback(null, true)
    } else {
      callback(new Error(`Origin ${origin} not allowed by CORS`), false)
    }
  },
  allowedHeaders: ['Content-Type'],
  optionsSuccessStatus: 200,
}

module.exports = corsOptions;