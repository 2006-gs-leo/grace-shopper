const chalk = require('chalk')

module.exports = io => {
  io.on('connection', socket => {
    console.log(
      chalk.blueBright(
        `A socket connection to the server has been made: ${socket.id}`
      )
    )

    socket.on('disconnect', () => {
      console.log(
        chalk.redBright(`Connection ${socket.id} has left the building`)
      )
    })
  })
}
