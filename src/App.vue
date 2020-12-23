<template>
  <div id="app">
    <pageHeader/>
    <router-view/>
  </div>
</template>

<script>
import pageHeader from './components/page-header.vue'

export default {
  components: { pageHeader }
}
</script>

<style lang="scss">
  @import "./assets/sass/blocks/page.scss";
</style>
