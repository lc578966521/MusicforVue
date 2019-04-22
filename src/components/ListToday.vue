<template>
  <div class="container">
    <img :src="pic" alt="">
    <ul>
      <li v-for="(item, index) in listSong" :key="index">
        <span class="icon">{{index+1}}</span>
        <span class="info">{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:'ListToday',
  data(){
    return {
      pic:'',
      listSong:[]
    }
  },
  props:{
    type:String
  },
  mounted(){
    this.$axios.get(this.URL+'/v1/restserver/ting',{
      params:{
        method:'baidu.ting.billboard.billList',
        type:this.type,
        size:'3',
        offset:0
      }
    })
    .then(result=>{
      this.pic = result.data.billboard.pic_s640;
      this.listSong = result.data.song_list;
      // console.log(result);
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
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    img{
      width: 25%;
      height: 25%;
    }
    ul{
      margin-left: 14px;
      padding: 6px 0;
      width: 70%;
      li{
        padding: 6px 0;
        display: flex;
        .icon{
          color: #fa6644;
          font-family: Arial;
          font-weight: 700;
          font-style: italic;
        } 
        .info{
          display: block;
          white-space:nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-indent: 12px;
          line-height: 17px;
        }       
      }
    }
  }
</style>

