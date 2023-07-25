<script setup>
import { onMounted } from 'vue'

function initViewer() {
  let viewer = new DC.Viewer('viewer-container')
}

onMounted(() => {
  DC.ready({}).then(initViewer)
})
</script>

<template>
  <div class="container">
    <div id="viewer-container" class="viewer-container"></div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}

.viewer-container {
  width: 100%;
  height: 100%;
}
</style>
