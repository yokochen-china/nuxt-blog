<template>
    <div class="dashboard-page">
        <div  ref="charts" :style="{width: '100%',height: '300px'}"></div>
    </div>
</template>
<script>


export default {
    layout:"console",
    data(){
        return {
            
        }
    },
    mounted(){
        this.drawLine()
    },
    methods:{
        drawLine(){
            let colors= ['#2d8cf0', '#515a6e', '#2db7f5']
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(this.$refs.charts,"customed")
            // 绘制图表
            myChart.setOption({
                color:colors,
                title: {
                    text: '今日流量趋势',
                    left:"center",
                    textStyle:{
                        fontSize:14
                    }
                },
                grid: {
                    top: 70,
                    bottom: 50
                },
                
                xAxis: {
                    data: ["06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"]
                },
                yAxis: {},
                series: [
                    {
                        name: 'IP',
                        type: 'line',
                        data: [0, 20, 36, 250, 400, 600,1500,555,186,999,564]
                    },
                    {
                        name: 'PV',
                        type: 'line',
                        data: [11, 22, 33, 80, 75, 99,165,1000,661,798,400]
                    }
                ]
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .dashboard-page{
        
    }
</style>
