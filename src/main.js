
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Vue from "vue"
import App from "./App"
import router from "./router"

import ElementUi from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import * as stores from "./store"
import { Keys } from "./uitls"
import { getCxt } from "./service-client"

let initRoomInfo = Keys.SETROOMINFO

Vue.use(ElementUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store: stores.default,
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  created: function () {
    let self = this
    getCxt().createIo(this, (roomInfo) => {
      // 初始化view与service层的交互层（业务层）
      stores.busCxt.init()
      self.$store.dispatch(initRoomInfo, roomInfo)
      getCxt().refUsers((users) => {
        stores.busCxt.userCxt.refUsers(users)
      })
    })
  }
})
