const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.set('debug', true);

mongoose.connect('mongodb://localhost/tasks', {
  server: {
    socketOptions: {
      keepAlive: 1
    },
    poolSize:      5
  }
});

module.exports = mongoose;
