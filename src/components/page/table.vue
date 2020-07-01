<template>
    <div class="el-table-wrapper">
        <div class="handle-wrapper">
            <el-input style="width: 200px;"/>
            <el-button type="primary" @click="searchTab">搜索</el-button>
            <el-button type="primary" @click="addRow">添加</el-button>
            <el-button type="primary" @click="exportTab">导出</el-button>
        </div>
        <el-table  ref="" 
            :data="tableData" 
            row-class-name="" 
            border stripe fit 
            style="width:100%;" 
            size="mini" 
            @cell-click="cellClicked">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column type="index"></el-table-column>
            <!-- <el-table-column label="zy">
                <template slot-scope="scope">
                    <el-checkbox label="1">备选项</el-checkbox>
                    <input type="checkbox">
                </template>
            </el-table-column> -->
            <el-table-column label="名字" prop="name"></el-table-column>
            <el-table-column label="地址" prop="addr"></el-table-column>
            <el-table-column width="200" label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="rowEdit">编辑</el-button>
                    <el-button type="danger" @click="rowsDelete(scope.$index, scope.row)" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            background
            layout="total, prev, pager, next" 
            :total="totalData" 
            :page-size="tableRows"  
            :current-page.sync="page" 
            @current-change="handleCurrentChange"
            style="float: right">
        </el-pagination>
    </div>
</template>

<script>
export default {
    props:{

    },
    data(){
        return{
            universityData:null,
            totalData: 0,
            totalPages:0,
            tableRows: 8,
            tableData: null,
            page: 1,
            listLoading: false,
            sels: [],//列表选中列
        }
    },
    computed:{
        calcu_page(){
            
        }
    },
    created(){
        this.axios.get("/static/shanghai_university.json").then((response)=>{
            if(response.data.reason == 'Success'){
                this.universityData = response.data.result.list;
                if(this.universityData.length)
                {
                    this.totalData = this.universityData.length;
                    this.totalPages = Math.ceil(this.totalData / this.tableRows);
                    console.log(this.totalPages);
                    this.tableData = this.universityData.slice( (this.page-1)*this.tableRows , this.page*this.tableRows);
                }
            }
            else{
                alert("Not get data !")
            }
        });
    },
    mounted () {
    },
    methods: {
        cellClicked(row, column, cell, event) {
            // console.log(row);
            // console.log(column);
            // console.log(cell);
            // console.log(event);
        },
        handleCurrentChange(currentPage) {
            // alert(currentPage);
            this.tableData = this.universityData.slice( (this.page-1)*this.tableRows , this.page*this.tableRows);
        },
        searchTab() {

        },
        addRow() {

        },
        exportTab() {

        },
        rowEdit() {

        },
        rowsDelete(index, row){
            // alert("delete:" + this.page +" index: "+ index);
            console.log(row)
            this.$confirm('确认删除？', '提示',{
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(()=>{

                this.universityData.splice( (this.page-1)*this.tableRows + index, 1);
                this.totalData = this.universityData.length;
                this.totalPages = Math.ceil(this.totalData / this.tableRows);
                this.tableData = this.universityData.slice( (this.page-1)*this.tableRows , this.page*this.tableRows);
                this.$message({
                    type: 'success',
                    message:'删除成功'
                })
            }).catch(()=>{
                this.$message({
                    type:info,
                    message:'已取消删除'
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped>

div.el-table-wrapper{
    height: 95%;
    //
}
.handle-wrapper {
    margin-bottom: 10px;
}

</style>
