<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>name: {{ name }}</h2>
    <div>
      <h2>name: remote-vue-componet遠程測試測試測試</h2>
      <h2>name: remote-vue-componet遠程測試測試測試</h2>
      <h2>name: remote-vue-componet遠程測試測試測試</h2>
      <h2>name: remote-vue-componet遠程測試測試測試</h2>
    </div>
    <el-button
      type="success"
      @click="
        showSelection = true;
        visible = true;
      "
    >
      這是一個"打开"选点弹框的按鈕
    </el-button>
    <selection-point-pro
      v-if="showSelection"
      ref="sphRef"
    ></selection-point-pro>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
console.log("Vue:", Vue)
console.log("Vue:", Vue)
import selectionPointMixin from "./mixins/selectionPointMixin.js";
export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  mixins: [selectionPointMixin],
  props: {
    name: String,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
};
</script>
