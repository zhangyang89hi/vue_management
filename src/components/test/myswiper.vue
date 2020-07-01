<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
            <img :src="slide" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'

export default {
    componets:{
        swiper,
        swiperSlide
    },
    data(){
        return{
            swiperOption:{
                notNextTick:true,
                autoplay:true,
                loop:true,
                direction:'horizontal',
                // autoHeight:true,
                //  setWrapperSize: true,
                pagination:{
                    el:'.swiper-pagination'
                },
                centeredSlises:true,
                paginationClickable:true,
                navigation:{
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev'
                },
                keyboard:true,
                mousewheelControl:true,
                // observeParents:true,
                // debugger:true
            },
            swiperSlides: [ '../../static/picture/dashboard.png',
                '../../static/picture/deviceManage.png',
                '../../static/picture/deviceMap.png',
                '../../static/picture/warning.png',
                '../../static/picture/user.png',
                '../../static/picture/mobile.png'
            ]
        }

    }
}
</script>

<style lang="scss" scoped>
.swiper-container{

    width: 60%;
    margin: auto;
}
.swiper-slide{
    margin: auto;
    img{
        display: block;
        margin: auto;
        width: 300px;
        height: 200px;
    }
}

</style>
