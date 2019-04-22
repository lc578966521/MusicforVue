<template>
    <div class="container">
      <div class="header">
        <h3>{{title}}</h3>
        <router-link :to="{name:'MoreList',params:{type:this.type,title:this.title}}" tag="span">更多</router-link>
      </div>
      <div class="body">
        <ul>
          <router-link tag="li" :to="{name:'MusicPlay',params:{songid:item.song_id}}" v-for="(item,index) in TodayRecommended" :key="index">
            <img :src="item.pic_big" :alt="item.title">
            <p>{{item.title}}</p>
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
    props:{
      title:{
        type:String,
        default:"今日推荐"
      },
      type:{
        type:String,
        default:"1"
      }
    },
    name: 'TodayRecommended',
    mounted() {
      this.$axios.get(this.URL+'/v1/restserver/ting',{params:{
        method:'baidu.ting.billboard.billList',
        type:this.type,
          size:6,
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
          }
        }
      }
    }
  </style>
  