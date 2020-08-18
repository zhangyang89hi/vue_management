<template>
    <el-container style="height: 100%;">
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu
                    mode="vertical"
                    :collapse="false"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-colo="#ffd04b"
                    style="height:100%"
                    collapse-transition
                    router
                    unique-opened
                    default-active="/dashboard"
                    @open="handleopen" 
                    @close="handleclose" 
                    @select="handleselect" 
                >
                    <template v-for="menu in menuItems">
                        <template v-if="menu.subs">
                            <el-submenu :key="menu.name" :index="menu.index">
                                <template slot="title">{{menu.name}}</template>
                                <el-menu-item v-for="item in menu.subs" :key="item.name" :index="item.index">{{item.name}}</el-menu-item>
                            </el-submenu>
                        </template>
                        <template v-else>
                            <el-menu-item :key="menu.name" :index="menu.index">{{menu.name}}</el-menu-item>
                        </template>
                    </template>
                </el-menu>
            </el-aside>
            <el-main class="main-wrapper">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="card-panel">
                            <div class="panel-text">New Visits</div>
                            <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num"/>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="card-panel">
                            <div class="panel-text">Messages</div>
                            <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num"/>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="card-panel">
                            <div class="panel-text">Purchases</div>
                            <count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num" />
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="card-panel">
                            <div class="panel-text">Shoppings</div>
                            <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" />
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <div id="chartLine" class="line-wrapper">

                    </div>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <div ref="raddarChart" class="chart-wrapper">1</div>
                    </el-col>
                    <el-col :span="8">
                        <div ref="pieChart" class="chart-wrapper">2</div>
                    </el-col>
                    <el-col :span="8">
                        <div ref="barChart" class="chart-wrapper">3</div>
                    </el-col>
                </el-row>
                <router-view></router-view>
            </el-main>
        </el-container>
        <el-footer height="40px">
            <div style="font-size:12px;color:rgba(7, 17, 27,0.6);margin-top:10px;">
                Copyright 1999 - 2099 ZYX. All Rights Reserved
            </div>
        </el-footer>
    </el-container>
</template>

<script>
import countTo from 'vue-count-to';
import echarts from 'echarts';

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
    components: {
        countTo
    },
    data () {
        return {
            lineChartData: lineChartData.newVisitis,
            menuItems:[
                {
                    name:'Readme',
                    icon:'',
                    index:'/dashboard/readme'
                },
                {
                    name: 'News',
                    icon: '',
                    index: '/dashboard/news'
                },
                {
                    name: 'blog',
                    icon: '',
                    index: '/dashboard/blog'
                },
                {
                    name:'Form',
                    icon:'',
                    index:'/dashboard/form',
                    subs: [
                        {
                            name:'form',
                            icon:'',
                            index:'/dashboard/form'
                        }
                    ]
                },
                {
                    name:'Table',
                    icon:'',
                    index:'/dashboard/table',
                    subs: [
                        {
                            name:'table',
                            icon:'',
                            index:'/dashboard/table'
                        }
                    ]
                },
                {
                    name:'Chart',
                    icon:'',
                    index:'/dashboard/chart',
                    subs: [
                        {
                            name:'chart',
                            icon:'',
                            index:'/dashboard/chart'
                        }
                    ]
                }
            ]
        }
    },
    created () {
    },
    mounted () {
        // console.log('$el: ', this.$el)
        // console.log('$data: ', this.$data)
        this.drawLine(this.lineChartData)
        this.drawRaddar()
        this.drawPie()
        this.drawBar()
    },
    methods: {
        drawLine({ expectedData, actualData } = {}) {
            this.chartLine = echarts.init(document.getElementById('chartLine'))
            this.chartLine.setOption({
                title: "",
                xAxis: {    
                    type: 'category',
                    boundaryGap: false,
                    axisLine: {
                        // show: false
                    },
                    axisTick: {
                        // show: false
                    },
                    splitLine: {
                        show: true,
                        // interval: 1,
                        lineStyle: {
                            color: '#f304041b'
                        }
                    },
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    axisTick: {
                        show: true
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {

                        }
                    }
                },
                legend: {
                    data: ['expected', 'actual']
                },
                tooltip: {
                    trigger: 'axis',
                    // axisPointer: {
                    //     type: 'cross'
                    // },
                    axisPointer: {
                        type: 'line'
                    },
                    padding: [5, 10]
                },
                grid: {
                    show: true,
                    containLabel: true,
                    left: 50,
                    right: 50,
                    top: 50,
                    bottom: 50
                },
                series: [
                    {
                        name: 'expect',
                        type: 'line',
                        data: expectedData,
                        smooth: true,
                        // animationDuration: 1500
                        // animationEasing: 'cubicInOut'
                    },
                    {
                        name: 'actual',
                        type: 'line',
                        data: actualData,
                        smooth: true,
                        // animationDuration: 1500
                        // animationEasing: 'quadraticOut'
                    }
                ]
            })
        },
        drawRaddar() {
            this.raddarChart = echarts.init(this.$refs['raddarChart'])
            this.raddarChart.setOption({
                title: {
                },
                tooltip: {},
                legend: {
                    data: ['Allocated Budget', 'Expected Spending', 'Actual Spending']
                },
                radar: {
                    radius: '60%',
                    startAngle: '0',
                    splitNumber: 8,
                    indicator: [
                        { name: 'Sales', max: 10000 },
                        { name: 'Administration', max: 20000 },
                        { name: 'Information Technology', max: 20000 },
                        { name: 'Customer Support', max: 20000 },
                        { name: 'Development', max: 20000 },
                        { name: 'Marketing', max: 20000 }
                    ]
                },
                series: [{
                    name: '',
                    type: 'radar',
                    data: [{
                        value: [5000, 7000, 12000, 11000, 15000, 14000],
                        name: 'Allocated Budget'
                    },{
                        value: [4000, 9000, 15000, 15000, 13000, 11000],
                        name: 'Expected Spending'
                    },{
                        value: [5500, 11000, 12000, 15000, 12000, 12000],
                        name: 'Actual Spending'
                    }]
                }]
            })
        },
        drawPie() {
            this.pieChart = echarts.init(this.$refs['pieChart'])
            this.pieChart.setOption({
                title: {},
                tooltip: {

                },
                legend: {
                    data: ['Industries', 'Technology', 'Forex', 'Gold', 'Forecasts']
                },
                series: [{
                    type: 'pie',
                    roseType: 'radius',
                    radius: [25, '60%'],
                    data: [
                        { value: 320, name: 'Industries' },
                        { value: 240, name: 'Technology' },
                        { value: 149, name: 'Forex' },
                        { value: 100, name: 'Gold' },
                        { value: 59, name: 'Forecasts' }
                    ]
                }]
            })
        },
        drawBar() {
            this.barChart = echarts.init(this.$refs['barChart'])
            this.barChart.setOption({
                title: {},
                tooltip: {},
                legend: {
                    data: ['pageA', 'pageB', 'pageC']
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                },
                yAxis: {
                    type: 'value',
                    axisTick: {
                        show: false
                    }
                },
                series: [{
                    name: 'pageA',
                    type: 'bar',
                    // barWidth: '60%',
                    stack: 'vistors',
                    data: [79, 52, 200, 334, 390, 330, 220]
                },{
                    name: 'pageB',
                    type: 'bar',
                    stack: 'vistors',
                    // barWidth: '60%',
                    data: [79, 52, 200, 334, 390, 330, 220]
                },{
                    name: 'pageC',
                    type: 'bar',
                    stack: 'vistors',
                    // barWidth: '60%',
                    data: [79, 52, 200, 334, 390, 330, 220]
                }]
            })
        },
        handleopen() {

        },
        handleclose() {

        },
        handleselect() {

        }
    }
}
</script>

<style lang="scss">
@import "../../themes/app";

.el-footer{
    position: fixed;
    bottom: 0px;
    margin: 0px;
    
    width: 100%;
    text-align: center;
    z-index: 100;
    border-radius: 5px;
    background-color:#f3f5f7;
}
.main-wrapper {
    background-color:#f3f5f7;
}
.card-panel {
    height: 100px;
    background-color: #fff;
    font-size: 12px;
    color: #666;
    position: relative;
    overflow: hidden;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, .05) ;
    text-align: center;
    // display: flex;
    // flex-direction: row;
    // align-items: center;
    // justify-content: center;
}
.card-panel:hover {
    background-color: #f3f5f7
}
// .card-panel::before {
//     content: '';
//     display: inline-block;
//     vertical-align: middle;
//     height: 100%;
// }
.panel-text {
    height: 50%;
    line-height: 50%;
    color: rgba(0, 0, 0, 0.45);
    font-size: 16px;
    position: relative;
    top: 25%;
    // margin-top: -10px;
    // transform: translateY(-50%);
    // display: inline-block;
    vertical-align: middle;
}
.card-panel-num {
    height: 50%;
    font-size: 20px;
}
.chart-wrapper {
    background-color: #fff;
    height: 400px;
}

.line-wrapper {
    height: 350px;
    width: 100%;
}
.xxx {
    color: #f304041b;
}
</style>