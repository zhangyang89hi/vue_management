<template>
    <div>
        <h3>This is a test of vue.</h3>
        <!-- <img src="./assets/logo.png"> -->
        <Element1>
            <p slot="a">插槽示例b</p>
            <p slot="b">插槽示例a</p>
        </Element1>
        <Chart1></Chart1>
        <MySwiper></MySwiper>
    </div>
</template>
<script>
import Element1 from './element1.vue';
import Chart1  from './chart1.vue';
import MySwiper from './myswiper';

export default {
    props:{

    },
    components:{
        Chart1,
        Element1,
        MySwiper
    },
    data(){
        return{

        }
    }
  
}
</script>
<style lang="scss" scoped>

</style>
