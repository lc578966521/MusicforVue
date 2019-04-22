<template>
    <div class="container">
       <div class="header-title">
        <h3>音乐榜单</h3>
        <span>更多</span>
        <!-- <router-link to="/more" tag="span">更多</router-link> -->
       </div>
       <ul class="header-banner">
         <li>
          <router-link to="/home/hot">热歌榜</router-link>
         </li>
         <li>
          <router-link to="/home/new">新歌榜</router-link>
         </li>
         <li>
          <router-link to="/home/king">King榜</router-link>
         </li>
       </ul>
       <!-- <router-view/> -->
    </div>
  </template>
  
  <script>
  export default {
    name:'MusicList',
    data(){
      return {

      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  
  .container{
    background-color: #fff;
    padding: 10px 10px;
    .header-title{
      margin: 14px 0 18px 0;
        display:flex;
        justify-content: space-between;
        h3{
          font-size: 20px;
        }
        span{
          font-size: 12px;
        }
    }
    .header-banner{
      display: flex;
      justify-content: space-around;
      li{
        a{
          font-size: 16px;
          color:#999;
        }
        .router-link-active{
          color:#299DE7;
        }
      }
    }
  }
  </style>
  