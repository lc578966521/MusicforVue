<template>
        <div class="container">
        <MusicList :type="nu" title="新歌榜"/>
        </div>
      </template>
      
      <script>
    import MusicList from '../../components/MusicList'
      export default {
       name:'NewList',
       data(){
           return {
               nu:1
           }
       },
       components:{
           MusicList
       }
      }
      </script>
      
      <style lang="less" scoped>
      </style>
      
  