<template>
    <div class="container">
       <ul>
         <router-link tag="li" :to="{name:'MusicPlay',params:{songid:item.song_id}}" v-for="(item,index) in musicList" :key="index">
           <img :src="item.pic_big" :alt="item.title">
           <div>
              <p>{{ item.title }}</p>
              <p class="author">{{ item.artist_name }}</p>
           </div>
         </router-link>
       </ul>
       <router-link :to="{name:'MoreList',params:{type:this.type,title:this.title}}" class="more-songs" tag="p">查看榜单&gt;</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name:'MusicList',
    data(){
      return {
        musicList:[]
      }
    },
    props:{
      type:{
        type:Number,
        default:""
      },
      title:{
        type:String,
        default:'热歌榜'
      }
    },
    mounted() {
      this.$axios.get(this.URL + '/v1/restserver/ting',{
        params:{
          method:'baidu.ting.billboard.billList',
          type:this.type,
          size:5,
          offset:0
        }
      }).then(res=>{
        this.musicList = res.data.song_list;
        // console.log(res.data);
      }).catch(erro=>{
        console.log(erro);
      })
    }
  }
  </script>
  
  <style lang="less" scoped>
    .container{
      padding: 0 10px;
      background-color: #fff;
      border-top: 1px solid #eee;
      margin-bottom: 10px;
      ul{
        display:flex;
        flex-wrap:wrap;
        li{
          width: 100%;
          height: 60px;
          border-bottom:1px solid #eee;
          padding-top: 10px;
          display: flex;
          img{
            /* display:inline-block; */
            width:45px;
            height:45px;
            margin-right:8px;
            border:1px solid #eee;
          }
          div{
            width: 80%;
            p{
              white-space:nowrap;
              overflow: hidden;
              text-overflow:ellipsis;
              font-size:16px;
              color:#333;
            }
            .author{
              font-size: 12px;
              color: #999;
              margin-top:2px;
            }
          }
        }
      }
      .more-songs{
        color: #999;
        /* margin-top: 9px; */
        font-size: 12px;
        text-align: center;
        height: 32px;
        line-height: 32px;
      }
    }
  </style>
  