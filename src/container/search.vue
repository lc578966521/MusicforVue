<template>
    <div class="container">
      <div class="header">
        <input type="text" name="" id="" placeholder="输入搜索内容" v-model="searchWord">
        <button @click="searchWordList">搜索</button>
      </div>
      <ul>
        <router-link tag="li" :to="{name:'MusicPlay',params:{songid:item.songid}}" v-for="(item , index) in songList" :key="index">
          <p class="songname">{{item.songname}}</p>
          <p class="songername">{{item.artistname}}</p>
        </router-link>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Search',
    data(){
      return {
        searchWord:'',
        songList:''
      }
    },
    methods:{
      getSongList(){
        this.$axios.get(this.URL+'/v1/restserver/ting',{
          params:{
            method:'baidu.ting.search.catalogSug',
            query:this.searchWord
          }
        })
        .then(result=>{
          this.songList = result.data.song;
        })
        .catch(error=>{
          console.log(error)
        })
      },
      searchWordList(){
        this.getSongList();
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  .container{
    .header{
      padding:20px;
      input{
        width: 80%;
        height: 30px;
        line-height: 30px;
        background-color:#fff;
        border: 1px solid #f1f2f3;
        padding-left: 10px;
      }
      button{
        width:15%;
        height: 30px;
      }
    }
    ul{
      border-bottom: 1px solid #e5e5e5;
      border-top: 1px solid #e5e5e5;
      padding: 5px 10px;
      li{
        min-height: 55px;
        text-align: left;
        .songername{
          font-weight: 400;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
  </style>
  