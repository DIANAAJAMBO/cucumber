const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  // change how the logs are prevented
  format: winston.format.printf((info)=>{
    return`[${info.level}] - ${info.message}`
  }),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' , level:"silly"}),
  ],
});
module.exports = logger;