import Vuex from "vuex"
import Vue from "vue"

import RoomViewCxt from "./room/roomViewCxt"
import UserViewCxt from "./userViewCxt"
import MsgViewCxt from "./msg/msgViewCxt"
import BusCxt from "./indexForBus"

let _busCxt = new BusCxt()

let _rvCxt = new RoomViewCxt()
let _uvCxt = new UserViewCxt(_busCxt.userCxt)
let _mvCxt = new MsgViewCxt()

let opt = {
  state: null,
  getters: null,
  actions: null
}
_rvCxt.use(opt)
_uvCxt.use(opt)
_mvCxt.use(opt)

Vue.use(Vuex)

let store = new Vuex.Store(opt)
export default store
export const busCxt = _busCxt
export function getBusCxt () {
  return _busCxt
}
