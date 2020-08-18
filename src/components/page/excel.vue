<template>
    <div>
        <input type="file" placeholder="请选择上传excel文件" @change="handleChange">
        <div class="drop" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">
            Drop excel file here
        </div>
        <div ref="uppyFile">

        </div>
        <div>
            <el-table
            :data="tableData"
            border stripe
            size="mini"
            >
                <el-table-column label="spacename" prop="spacename"></el-table-column>
                <el-table-column label="config_name" prop="config_name"></el-table-column>
                <el-table-column label="Method" prop="Method"></el-table-column>
                <el-table-column label="value" prop="value"></el-table-column>
                <el-table-column label="commnet" prop="commnet"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import XLSX from 'xlsx'
import * as FilePond from 'filepond';

export default {
    data() {
        return {
            tableData: []
        }
    },
    created () {
        
    },
    mounted () {
        const pond = FilePond.create({
            multiple: true,
            name: 'filepond',
            onaddfile: (e, f) => {
                console.log(f)
            }
        });
        // Add it to the DOM
        this.$refs['uppyFile'].appendChild(pond.element);
        // pond.element.addEventListener('FilePond:addfile', (e) => {
        //     console.log(e.detail)
            // const fr = new FileReader()
            // fr.onload = (e) => {
            //     const data = e.target.result
            //     console.log(JSON.parse(data))
            // }
            // fr.readAsText(e.detail.file.file)
        // })
    },
    methods: {
        handleChange(e) {
            console.log(e)
            console.log(e.target.files)
            const file = e.target.files[0]
            this.handleFile(file)
        },
        handleDrop(e) {
            e.stopPropagation();
            e.preventDefault();
            console.log(e.dataTransfer.files)
            const file = e.dataTransfer.files[0]
            this.handleFile(file)
        },
        handleDragover(e) {
            e.stopPropagation();
            e.preventDefault();
            // e.dataTransfer.dropEffect = 'copy'
        },
        handleFile(file) {
            const fr = new FileReader()
            fr.onload = (e) => {
                const data = e.target.result
                console.log(data)
                const workbook = XLSX.read(data, { type: 'array' })
                console.log(workbook)
                const firstSheetName = workbook.SheetNames[0]
                const worksheet = workbook.Sheets[firstSheetName]
                const results = XLSX.utils.sheet_to_json(worksheet)
                console.log(results)
                this.tableData = results
            }
            fr.readAsArrayBuffer(file)
        }
    }
}
</script>

<style>
@import 'filepond/dist/filepond.min.css';
.drop {
    width: 400px;
    height: 200px;
    border: 1px dashed #bbb;
    color: #666;
}
</style>