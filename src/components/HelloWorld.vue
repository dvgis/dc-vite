<template>
  <div id="viewer-container" class="viewer-container"></div>
</template>

<script>
export default {
  name: 'Viewer',
  methods: {
    initViewer() {
      let viewer = new DC.Viewer("viewer-container")
      viewer.addBaseLayer(DC.ImageryLayerFactory.createAmapImageryLayer({
        style: 'img'
      }))
    }
  },
    mounted() {
      DC.ready(this.initViewer)
    }
}
</script>

<style scoped >
.viewer-container{
  width: 100%;
  height: 100%;
}
</style>