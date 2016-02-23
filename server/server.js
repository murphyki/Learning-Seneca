require('seneca')()
  .use(require('./service.js'))
  .listen({pin: 'role:math'}) // only interested in messages with patern 'role/math'