<template>
  <div id="app">
    <defaultLayout :header="false" :footer="true">
      <router-view></router-view>
    </defaultLayout>
  </div>
</template>

<script>
import defaultLayout from '@/components/layout/default.vue'
export default {
  name: 'App',
  components:{
    defaultLayout
  }
}
</script>

<style>
#app {

}
</style>
