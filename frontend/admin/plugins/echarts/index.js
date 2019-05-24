import echarts from 'echarts'
import theme from "./customed"
import Vue from "vue"
echarts.registerTheme('customed', theme)

Vue.prototype.$echarts = echarts


