import { Keys } from "../uitls"
class UserBusCxt {
  constructor (cxt) {
    this.cxt = cxt
  }
  init () {
    let self = this
    this.cxt.newUser((user) => {
      self.cxt.vm.$store.dispatch(Keys.ADDUSER, user)
    })
  }
  registerUser (userId, userName) {
    this.cxt.registerUser(userId, userName)
  }
  closeConn () {
    this.cxt.closeConn()
  }
  refUsers (users) {
    this.cxt.vm.$store.dispath(Keys.REFUSERS, users)
  }
}

export default UserBusCxt
