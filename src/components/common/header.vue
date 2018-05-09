@<template>
  <header :style="{background:color}">
    <i></i>
    {{title}}
    <i></i>
  </header>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  props:{
    title:{
      type : String,
      default: ''
    },
    color:{
      type: String,
      default: '#0181ca'
    }
  }
}
</script>

<style lang="less">
  header{
    width: 100%;
    height: 160px;
    // background-color: #0181ca;
    box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.27);
    font-size: 54px;/*px*/
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
