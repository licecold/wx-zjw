<template>
  <footer>
    <ul>
      <li v-for="(item, index) in list" :key="index" :class="{active: currentIndex === index}" @click="changeCurrentActive(index)">
        <i></i>
        <span>{{item.content}}</span>
      </li>
    </ul>
  </footer>  
</template>

<script>
export default {
  data(){
    return{
      list:[
        {
          content:'首页',
        },
        {
          content:'资料培训',
        },
        {
          content:'我的',
        }
      ],
      currentIndex: 0
    }
  },
  methods:{
    changeCurrentActive(index){
      this.currentIndex = index;
    }
  }
}
</script>

<style lang="less">
  footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 146px;
    box-shadow: 0px -4px 6px 0px rgba(0, 0, 0, 0.278);
    background-color: #f2f2f2;
    ul{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      li{
        flex: 1;
        height: 100%;
        text-align: center;
        color: #999;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 21px 0;
        font-size: 14px;/*px*/
        &.active{
          color: #0082d8;
        }
      }
    }
  }
</style>
