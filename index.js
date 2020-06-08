const liteflow = new (require('@liteflow/service'))()

liteflow.listenTask({
  pick: require('./tasks/pick')
})