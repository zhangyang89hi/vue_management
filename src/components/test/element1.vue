<template>
<div>
    <div>This is element.</div>
    <div>

    </div>
    <slot name="a"> This is a slot a</slot>
    <slot name="b"> This is a slot b</slot>
    <el-dropdown>
        <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</div>

</template>
<script>


export default {
    props:{

    },
    data(){
        return{

        }
    },
    methods:{

    },
    computed:{

    },
    created(){

    },
    mounted(){

    }
  
}
</script>

<style lang="scss" scoped>

</style>