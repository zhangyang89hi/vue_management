import ClipboardJS from 'clipboard'
import Vue from 'vue'

export function copyClip(event) {
    const clipboard = new ClipboardJS(event.target)
    clipboard.on('success', (e) => {
        Vue.prototype.$message({
            type: 'success',
            showClose: true,
            message: '复制成功',
            duration: 500
        })
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);
        e.clearSelection();
        // clipboard.off('error')
        // clipboard.off('success')
        clipboard.destroy();
    });
    clipboard.on('error', (e) => {
        Vue.prototype.$message({
            type: 'error',
            showClose: true,
            message: '复制失败'
        })
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        // clipboard.off('error')
        // clipboard.off('success')
        clipboard.destroy();
    });
    clipboard.onClick(event)
}

