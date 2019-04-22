<template>
    <div class="container">
      <ul>
        <router-link tag="li" :to="{name:'SongerDetails',params:{ting_uid:item.ting_ui}}" v-for="(item,index) in artistsData" :key="index">
          <img :src="item.avatar_s500" :alt="item.name">
          <p>{{item.name}}</p>
        </router-link>
      </ul>
    </div>
  </template>
  <script>
  export default{
    name:'Singer',
    data(){
      return {
        artistsArr:["2517","7994","1091","45561","2507","245815","1077","1204","1117","82366"],
        artistsData:[]
      }
    },
    mounted(){
      for(var i = 0 ; i < this.artistsArr.length;i++){
        this.$axios.get(this.URL+'/v1/restserver/ting',{
          params:{
            method:'baidu.ting.artist.getInfo',
            tinguid:this.artistsArr[i]
          }
        })
        .then(result=>{
          this.artistsData.push({
            avatar_s500:result.data.avatar_s500,
            name:result.data.name,
            ting_ui:result.data.ting_uid
          })
        })
        .catch(error=>{
          console.log(error);
        })
      }
    }
  }
  </script>
  <style lang="less" scoped>
    .container{
      padding: 0 17px;
      background-color: #fff;
      ul{
        li{
          min-height:70px;
          border-bottom:1px solid #f2f2f2;
          display:flex;
          align-items:center;
          img{
            width: 54px;
            height: 54px;
            margin-right: 15px;
            border-radius: 50%;
          }
          p{
            font-size: 16px;

          }
        }
      }
    }
  </style>