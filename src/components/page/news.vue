<template>
    <div class="newsWrapper">
        <el-tabs value="top"  @tab-click="handleClick">
            <el-tab-pane label="头条" name="top"></el-tab-pane>
            <el-tab-pane label="社会" name="shehui"></el-tab-pane>
            <el-tab-pane label="国内" name="guonei"></el-tab-pane>
            <el-tab-pane label="国际" name="guoji"></el-tab-pane>
            <el-tab-pane label="娱乐" name="yule"></el-tab-pane>
            <el-tab-pane label="体育" name="tiyu"></el-tab-pane>
            <el-tab-pane label="国内" name="junshi"></el-tab-pane>
            <el-tab-pane label="科技" name="keji"></el-tab-pane>
            <el-tab-pane label="财经" name="caijing"></el-tab-pane>
            <el-tab-pane label="时尚" name="shishang"></el-tab-pane>
        </el-tabs>
        <ul>
            <li style="margin:10px 0; padding:10px 0; border-bottom:solid 1px rgba(7, 17, 27,0.1);" v-for="n in news" :key="n.uniquekey">
                <div style="margin:10px 0;">
                    <a :href="n.url"><span style="color:rgb(0,20,20);font-size: 16px;">{{n.title}}</span></a>
                    </div>
                <div style="">
                    <img width="160px" height="120px"  :src="n.thumbnail_pic_s" alt="P1">
                    <img width="160px" height="120px" v-show="n.thumbnail_pic_s02" :src="n.thumbnail_pic_s02" alt="P2">
                    <img width="160px" height="120px" v-show="n.thumbnail_pic_s03" :src="n.thumbnail_pic_s03" alt="P3">
                </div>
                <div style="margin:10px 0;color:rgba(7, 17, 27,0.6);">
                    <span style="margin-right:20px">{{n.author_name}}</span>
                    <span>{{n.date}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            news:[],
            currentItem: "top",
        }
    },
    props:{

    },
    methods:{
        handleClick(tab, event){
            console.log(tab, event);
            if(this.currentItem == tab.name){

            }
            else{
                this.currentItem = tab.name;
                // http://v.juhe.cn/toutiao/index?type=top&key=683326d2193cb12c1df130bd0fd695da
                this.axios.get('/juhe/toutiao/index?type='+ this.currentItem +'&key=683326d2193cb12c1df130bd0fd695da').then((response)=>{
                if(response.data.result.stat == '1'){
                    this.news = response.data.result.data;
                }
                else{
                    alert("Not get News !")
                }
        })
            }
        }
    },
    computed:{

    },
    created(){
        console.log("news created");
        // 'http://v.juhe.cn/toutiao/index?type=top&key=683326d2193cb12c1df130bd0fd695da'
        //
        this.axios.get('/juhe/toutiao/index?type=top&key=683326d2193cb12c1df130bd0fd695da').then((response)=>{
            if(response.data.result.stat == '1'){
                this.news = response.data.result.data;
                console.log("news");
            }
            else{
                alert("Not get News !")
            }
        })
    },
    mounted(){
        console.log("news mounted");
    },
    updated(){
        console.log("news updated");
    },
    destroyed(){
        console.log("news destroyed");
    }

}
</script>

<style lang="scss" >

</style>

