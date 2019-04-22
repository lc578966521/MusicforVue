<template>
    <div class="container">
      <div class="header">
        <img :src="pic" :alt="name">
        <h3>{{name}}</h3>
      </div>
      <div class="list">
        <ul>
          <router-link tag="li" :to="{name:'MusicPlay',params:{songid:item.song_id}}" v-for="(item,index) in list" :key="index">
            <p class="songlist">
              {{ item.title }}
            </p>
          </router-link>
        </ul>
      </div>
    </div>
  </template>
  <script>
  export default{
    name:'SongerDetails',
    data(){
      return {
        name:'',
        pic:'',
        list:[]
      }
    },
    mounted(){
      this.$axios.get(this.URL+'/v1/restserver/ting',{
        params:{
          method:'baidu.ting.artist.getSongList',
          tinguid:this.$route.params.ting_uid,
          limits:"10",
          use_cluster:"1",
          order:"2"
        }
      })
      .then(result=>{
        console.log(result);
        this.name=result.data.artistinfo.name;
        this.pic=result.data.artistinfo.avatar_s500;
        this.list = result.data.songlist;
      })
      .catch(error=>{
        console.log(error);
      })
    }
  }
  </script>
  <style lang="less" scoped>
  .container{
    background-color: #fff;
    .header{
      padding-top: 10px;
      background-color: #FDF4E5;
      height: 160px;
      width:100%;
      text-align:center;
      img{
        width:80px;
        height:80px;
        border-radius:50%;
      }
      h3{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 1.8rem;
        line-height: 30px;
        margin-top: 12px;
        color: #333;
        font-weight: 400;
      }
    }
    .list{
      margin-top:10px;
      ul{
        padding:0 12px;
        li{
        height:50px;
        line-height:50px;
        border-bottom:1px solid #eee;
        .songlist{
          font-size:18px;
        }
      }
      }
      
    }
  }
  </style>