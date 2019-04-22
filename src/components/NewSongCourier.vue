<template>
    <div class="container">
      <div class="header">
        <h3>新歌速递</h3>
        <router-link :to="{name:'MoreList',params:{type:2,title:'新歌速递'}}" tag="span">更多</router-link>
      </div>
      <div class="body">
        <ul>
          <router-link tag="li" :to="{name:'MusicPlay',params:{songid:item.song_id}}" v-for="(item,index) in TodayRecommended" :key="index">
            <img :src="item.pic_big" :alt="item.title">
            <p>{{item.title}}</p>
            <p class="author">{{item.author}}</p>
          </router-link>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return {
        TodayRecommended:[]
      }
    },
    name: 'NewSongCourier',
    mounted() {
      this.$axios.get(this.URL+'/v1/restserver/ting',{params:{
        method:'baidu.ting.billboard.billList',
        type:2,
          size:3,
          offset:0
      }})
      .then(res=>{
        this.TodayRecommended = res.data.song_list;
        // console.log(res.data);
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
      padding: 10px 17px;
      margin-top: 10px;
      .header{
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
      .body{
        ul{
          display: flex;
          justify-content: space-between;
          flex-wrap:wrap;
        }
        li{
          width:33.3%;
          box-sizing: border-box;
          padding: 0 5px 10px;
          img{
            border:1px solid #fff;
          }
          p{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 12px;
            margin-top: 4px;
            line-height: 14px;
            margin-bottom: 2px;
            max-height: 28px;
            /* color: #333; */
          }
          .author{
            color: #999;
            line-height: 12px;
          }
        }
      }
    }
  </style>
  