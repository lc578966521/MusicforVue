<template>
  <div class="index">
    <ul>
      <li>
        <router-link to="/home">
          <img src="../assets/logo-ea5.png" alt="">
        </router-link>  
      </li>
      <li>
        <router-link to="/singer">歌手</router-link>
      </li>
      <li>
        <router-link to="/list">榜单</router-link>
      </li>
      <li>
        <router-link to="/my">我的</router-link>
      </li>
      <li>
        <router-link to="/search">搜索</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="less" scoped>
  .index{
    ul{
      display:flex;
      height:50px;
      line-height:50px;
      background-color: #f9f9f9;
      li{
        flex: 1;
          text-align: center;
        img{
          width:26px;
          height:26px;
        }
        .router-link-active{
          color: red;
        }
        a{
          color: #999;
        }
      }
    }
  }
</style>
