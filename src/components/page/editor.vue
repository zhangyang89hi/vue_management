<template>
    <div>
        <textarea :id="id" :value="value"></textarea>
    </div>
</template>

<script>

import tinymce from 'tinymce';
import 'tinymce/themes/modern/theme';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/code';
import 'tinymce/plugins/image';
import 'tinymce/plugins/table';

const INIT = 0;
const CHANGED = 2;
var EDITOR = null;
window.tinymce.baseURL = '/static'

export default {
    props: {
        value: {
            type: String,
            required: true
        },
        setting: {}
    },
    data() {
        return {
            status: INIT,
            id: 'editor-'+new Date().getMilliseconds(),
        }
    },
    watch: {
        value: function(val) {
            console.log('init ' + val)
            if (this.status == INIT || tinymce.activeEditor.getContent() != val){
                tinymce.activeEditor.setContent(val);
            }
            this.status = CHANGED
        }
    },
    mounted () {
        const self = this
        const setting = {
            selector:'#'+self.id,
            language:"zh_CN",
            init_instance_callback:function(editor) {
                EDITOR = editor
                console.log("Editor: " + editor.id + " is now initialized.")
                console.log('window.tinymce.baseURL' + window.tinymce.baseURL)
                editor.on('input change undo redo', () => {
                    var content = editor.getContent()
                    self.$emit('input', content);
                })
            },
            plugins:[]
        }
        Object.assign(setting,self.setting)
        tinymce.init(setting);
    },
    created () {
        
    },
    methods: {
        
    },
    beforeDestroy () {
        tinymce.get(this.id).destroy();
    }

}
</script>

<style>

</style>
