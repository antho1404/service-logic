const mesg = require('mesg-js').service()

mesg.listenTask({
  pick: require('./tasks/pick')
})