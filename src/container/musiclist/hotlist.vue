<template>
    <div class="container">
    <MusicList :type="nu" title="热歌榜"/>
    </div>
  </template>
  
  <script>
import MusicList from '../../components/MusicList'
  export default {
   name:'HotList',
   data(){
       return {
           nu:2
       }
   },
   components:{
       MusicList
   }
  }
  </script>
  
  <style lang="less" scoped>
  </style>
  