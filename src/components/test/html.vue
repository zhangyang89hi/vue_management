<template>
    <div class="main">
        <section>
            <div class="center">
                this is center of paragraph.关于配置MSBuild编译器选项的更多详细信息，请参考：在MSBuild里使用编译选项
            </div>
            <div class="left">
                left
            </div>
            <div class="right">
                right
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
        }
    },
    created () {
        
    },
    mounted () {
        
    }
}
</script>

<style>
    .main {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 10px 20px;
        font-size: 12px;
    }
    section {
        width: 100%;
        padding: 0 100px;
        box-sizing: border-box;
        /* position: relative; */
    }
    section::after {
        content: '';
        display: block;
        clear: both;
    }
    section > div {
        height: 229px;
        line-height: 1.5em;
        /* padding: 20px 10px; */
        /* text-align: center; */
        float: left;
        color: white;
        background: #b4a078;
    }
    section .left, section .right {
        width: 100px;
        position: relative;
    }
    section .center {
        width: 100%;
    }
    section .left {
        left: -110px;
        margin-left: -100%;
    }
    section .right {
        left: 110px;
        margin-left: -100px;
    }
</style>