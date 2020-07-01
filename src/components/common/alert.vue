<template>
    <div v-show="dialogShow" class="myAlert">
        <div class="headline">
            {{title}}
        </div>
        <div class="content">{{content}}</div>
        <div>
            <button class="buttonText" @click="closeDialog">
                {{btnTxt}}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '提示'
        },
        content: {
            type: String,
            default: '系统繁忙，请稍后再试'
        },
        btnTxt: {
            type: String,
            default: '我知道了'
            
        },
        width: {
            type: Number,
            default: 300
        }
    },
    data() {
        return {
            dialogShow: this.show
        }
    },
    watch: {
        show(showUp) {
            this.dialogShow = showUp;
        }
    },
    methods: {
        closeDialog() {
            console.log('closeDialog')
            // this.dialogShow = false
            this.$emit('close');
        }
    }
}
</script>

<style>
.myAlert {
    background:#ddd;
    position: fixed;
    z-index: 999;
    left: 100px;
    top: 100px;
}
.headline {
    text-align: center;
}
.buttonText {
    margin: auto;
}
</style>
