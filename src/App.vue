<template>
  <div id="app">
    <div class="head">
      <div class="col-xs-10 head-title">
        <span v-if="getRoomInfo != null" >当前房间名称：{{getRoomInfo.name}}</span>
      </div>
      <div class="col-xs-2 head-toolbar">
        <button class="btn btn-primary" v-on:click="loginOut" >登出</button>
      </div>
    </div>
    <div class="cont">
      <HChart></HChart>
      <Login></Login>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { Keys } from "@/uitls"
import HChart from "@/components/HChart"
import Login from "@/components/Login"
import { getBusCxt } from "@/store"

let currRoom = Keys.GETROOMINFO

export default {
  name: "App",
  components: {
    HChart,
    Login
  },
  computed: {
    ...mapGetters([currRoom])
  },
  methods: {
    loginOut () {
      getBusCxt().userCxt.closeConn()
      window.close()
    }
  }
}
</script>

<style lang="scss">
$head-height: 40px;
html, body, #app, .cont{
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.head{
  height: $head-height;
  text-align: left;
  background: -webkit-linear-gradient( left top,#20A0FF,#58B7FF);
}
.cont{
  margin-top: -$head-height;
  padding-top: $head-height;
}
.head-title{
  padding: 10px;
}
.head-toolbar{
  padding-top: 5px;
  text-align: right;
}
</style>
