<template>
  <div>
    <h1>这是远程加载的标题h1</h1>
    <el-button @click="startInterval">开启定时器</el-button>
    <el-button @click="stopInterval">关闭定时器</el-button>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: 'SelectionPointPro',
  data() {
    return {
      timer1: null
    }
  },
  created() {
    // 重置请求的url路径
  },
  mounted(){
   
  },
  beforeDestroy() {

  },
  methods: {
    startInterval(){
      // this.$message.info("hello world!")
      console.log("selection-point-pro-Vue：", Vue)
        console.log("selection-point-pro-Vue：", Vue.prototype)
        console.log("selection-point-pro-Vue：", Vue.prototype.$message)
        Vue.prototype.$message("hello world!")
        console.log("selection-point-pro-window", window.Vue.prototype)

      // this.timer1 =  setInterval(() => {
      //   // this.$message.info("hello world!")
      //   console.log("selection-point-pro-Vue：", Vue)
      //   console.log("selection-point-pro-Vue：", Vue.prototype)
      //   console.log("selection-point-pro-Vue：", Vue.prototype.$message)
      //   Vue.prototype.$message("hello world!")
      //   console.log("selection-point-pro-window", window.Vue.prototype)
      // }, 3000);
    },
    stopInterval(){
      this.timer1 && clearInterval(this.timer1)
    }
  }
}
</script>
