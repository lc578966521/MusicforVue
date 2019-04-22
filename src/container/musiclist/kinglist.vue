<template>
        <div class="container">
        <MusicList :type="nu" title="King榜"/>
        </div>
      </template>
      
      <script>
    import MusicList from '../../components/MusicList'
      export default {
       name:'KingList',
       data(){
           return {
               nu:11
           }
       },
       components:{
           MusicList
       }
      }
      </script>
      
      <style lang="less" scoped>
      </style>
      