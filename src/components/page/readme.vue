<template>

<div class="resume">
    <div class="basic">
      <h3>基本信息</h3>
      <br>
      <p><span>姓名：张洋洋</span><span class="rr">性别：男</span></p>
      <p><span>年龄：28</span><span class="rr">籍贯：河南新蔡</span></p>
      <p><span class="ph">电话：17521087305</span></p>
      <p><span class="email">邮箱：zhangyang89hi@126.com</span></p>
      <br>
      <span>
        Github: <a href="https://github.com/zhangyang89hi/resume.git">https://github.com/zhangyang89hi/resume.git</a>
      </span>
    </div>
    <div class="education">
      <h3>教育背景</h3>
      <br>
      <p>2007.9 - 2011.7    西安邮电大学    光电信息工程    本科  </p>
      <p>2012.9 - 2015.7    西安工业大学    光学工程       研究生</p>
      <p>大学英语四/六级（CET-4/6），良好的听说读写能力，能快速浏览英语专业文件及书籍</p>
    </div>
    <div class="skill">
      <h3>工作技能</h3>
      <br>
      <ul>
        <li>熟练掌握HTML/CSS/JavaScript，熟悉HTML5/CSS3/ES6新特性，</li>
        <li>掌握jQuery / jQuery UI / Bootstrap 等前端框架的使用和开发</li>
        <li>熟练使用Sass 、Gulp、Webpack等预处理/自动化构建工具进行前端工程化开发</li>
        <li>熟悉Vue+Vuex及全家桶，了解框架实现原理，并有项目开发经验；</li>
        <li>理解React/Redux的基本原理，能够快速的使用React技术栈进行项目开发</li>
        <li>理解Web,W3C标准 掌握基本的前端兼容性处理、跨浏览器适配，性能优化知识与技巧</li>
        <li>熟悉Linux基本操作，了解Node.js、Express框架</li>
      </ul>
    </div>
    <div class="experience">
      <h3>项目经历</h3>
      <br>
      <h4>2016.05 - 2017.12 上海恒兆节能科技有限公司 软件开发工程师</h4>
      <ol>
        <li>公司网站建设和维护</li>
        <li>配合架构师完成智能照明系统前端页面的开发工作</li>
        <li>对照明控制系统进行调试，维护</li>
      </ol>
      <p>基于ZigBee的无线照明web控制系统 项目描述：利用ZigBee无线通讯技术，对灯具进行远程管理，web前端采用Vue框架，使用了jQuery / ECharts / Bootstrap，该系统具有硬件管理、参数配置、灯具控制、场景控制、能耗展示、系统报告等功能 担任角色：在架构师的带领下，负责完成页面的开发、调试和适配工作，并根据项目中的使用情况进行调整和修改</p>
    </div>
    <div class="self">
      <h3>自我评价</h3>
      <br>
      <p>具有良好的编程习惯和较强的的学习能力，良好的沟通能力，有团队合作精神和责任感，能够勇于承担重任。关注前端技术发展，喜欢研究新技术，熟悉web项目开发流程。</p>
    </div>
    <div class="show">
        <h3>展示</h3>
        <br>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
                <img :src="slide" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
            <!-- <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>
    </div>
  </div>

    <!-- <div>
        userinfo
        <router-view></router-view>
    </div> -->
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'

export default {
    props:{

    },
    components:{
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
            swiperSlides: [ '/static/picture/dashboard.png',
                '/static/picture/deviceManage.png',
                '/static/picture/deviceMap.png',
                '/static/picture/warning.png',
                '/static/picture/user.png',
                '/static/picture/mobile.png'
            ]
        }
    },
    methods:{

    },
    computed:{

    },
    created(){

    },
    mounted(){

    },
    updated(){

    }
}
</script>

<style lang="scss">

    .resume{
        width: 90%;
        margin: auto;
        min-width: 300px;
        font-size: 12px;
        .basic{
            margin: 10px;
            p{
                width: 100%;
                margin: 0;
                padding: 0;
                span{
                    display: inline-block;
                    width: 50%;
                    margin: 0;
                    padding: 0;
                    .rr{
                        float: right;
                    }
                    .ph{
                        width: 100%;
                        display: block;
                    }
                    .email{
                    width: 100%;
                    display: block;
                    }
                }
            }
        }
        .education{
            margin: 10px;
        }
        .skill {
            margin: 10px;
            li{
                margin: 6px;
            }
        }
        .experience {
            margin: 10px;
            li{
                margin: 6px;
            }
        }
        .self{
            margin: 10px;
        }
        .show{
            margin: 10px;
            .swiper-slide{
                margin: auto;
                img{
                    display: block;
                    margin: auto;
                    width: 300px;
                    height: 200px;
                }
            }
        }
    }

</style>
