let RoomCollection = require("./room/index")
let Context = require("./context.js")
let cxt = new Context()
RoomCollection.initRoom(cxt)

module.exports = cxt
