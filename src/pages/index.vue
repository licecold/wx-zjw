@<template>
  <div class="index">
    <div class="topNav">
      <div class="swiper">
        <div class="searchWrap">
          <search @afterInput="search"></search>
        </div>
      </div>
      <div class="navList">
        <ul>
          <li v-for="(nav, index) in navList" :key="index"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import search from '@/components/common/search.vue'
export default {
  data(){
    return{}
  },
  components:{
    search
  },
  methods:{
    search(a){
      console.log(a)
    }
  }
}
</script>

<style lang="less">
  .index{
    .topNav{
      .swiper{
        height: 500px;
        width: 100%;
        background: #ccc;
        .searchWrap{
          position: absolute;
          width: 100%;
          padding: 34px 30px 0;
          top: 0;
          left: 0;
        }
      }
      .navList{
        padding: 0 30px;
        height: 289px;
        
      }
    }
  }
</style>

