<template>
    <div>
        myblog
        <editor class="editor" :value="content" :setting="editorSetting" @input="(content) => content = content"></editor>
    </div>
</template>

<script>
import editor from './editor.vue'
export default {
    components: {
        editor
    },
    data() {
        return {
            content: 'my blog editor.',
            editorSetting: {
                height: 400
            }
        }
    },
    created() {

    },
    methods: {

    }
}
</script>

<style>

</style>
