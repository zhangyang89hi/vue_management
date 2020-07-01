<template>
<div>
    <div>This is chart.</div>
    <div id="chart1" class="chart1"></div>
</div>
</template>
<script>
// import echarts from 'echarts';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

export default {
    name: 'Chart1',
    props:{

    },
    data(){
        return{

        }
    },
    methods:{
        drawLine(){
            var myLine = echarts.init(document.getElementById('chart1'));
            myLine.setOption({
                title:{text: 'Echarts myLine'},
                tooltip:{},
                xAxis:{
                    data:["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋"]
                },
                yAxis:{},
                series:[{
                    name: '销量',
                    type: 'line',
                    data:[5, 20, 36, 10, 10]
                }]
            });
        }
    },
    computed:{

    },
    created(){

    },
    mounted(){
        this.drawLine();
    }
}
</script>

<style lang="scss" scoped>
    .chart1{
        height: 320px;
        width: 320px;
    }
</style>
